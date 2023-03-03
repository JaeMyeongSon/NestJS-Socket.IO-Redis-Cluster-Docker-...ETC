import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Decrypt } from '@lib/common';
import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Redis } from 'ioredis';
import { ManagerService } from '../manager.service';
import { ChattingService } from '../../chatting/chatting.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  pingInterval: 10000, //10초마다 클라이언트에게 ping을 보냄
  pingTimeout: 5000, //클라이언트로부터 ping을 5초동안 받지 못하면 연결 해제
})
@Injectable()
export class ManagerGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    @InjectRedis() private readonly redisClient: Redis,
    private readonly managerService: ManagerService,
    private readonly chattingService: ChattingService,
  ) {}
  private static readonly logger = new Logger(ManagerGateway.name);
  @WebSocketServer()
  server: Server;

  // 초기화
  async afterInit() {
    // 기본 로비 셋팅
    await this.redisClient.set(
      'room:lobby',
      JSON.stringify({ roomId: 'room:lobby', roomName: '로비', cheifId: null }),
    );
    ManagerGateway.logger.debug('서버가 실행되었어요.');
  }

  //소켓 연결
  async handleConnection(client: Socket) {
    const jwtAccessToken = String(
      Decrypt(client.handshake.auth.jwtAccessToken),
    );
    const sessionId = String(Decrypt(client.handshake.auth.sessionId));
    return this.managerService.handleConnection(
      this.server,
      client,
      jwtAccessToken,
      sessionId,
    );
  }

  //소켓 해제
  async handleDisconnect(client: Socket) {
    const { roomId } = client.data;
    if (
      roomId != 'room:lobby' &&
      !this.server.sockets.adapter.rooms.get(roomId)
    ) {
      this.chattingService.deleteChatRoom(this.server, roomId);
      this.redisClient.del(roomId);
      this.redisClient.del(`socket:${client.data.memberId}`);
      this.server.emit(
        'getChatRoomList',
        this.chattingService.getChatRoomList(),
      );
      ManagerGateway.logger.debug('disonnected', client.id);
    }

    ManagerGateway.logger.debug(`${client.id} 소켓 연결 해제 ❌`);
  }

  // 접속중인 클라이언트 닉네임 목록 가져오기
  @SubscribeMessage('getPlayerList')
  async getPlayerList(client: Socket) {
    return await this.chattingService.getPlayerList(client);
  }

  // 테스트 디버그 메세지
  @SubscribeMessage('debugMessage')
  async debugMessage(client: Socket, message: string) {
    ManagerGateway.logger.debug('디버그 메세지 : ' + message);
  }
}
