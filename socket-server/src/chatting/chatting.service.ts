import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Member, SessionInfo } from '@lib/entity';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Redis } from 'ioredis';
import { Server, Socket } from 'socket.io';
import { DataSource, Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { uuid } from 'uuidv4';

@Injectable()
export class ChattingService {
  private static readonly logger = new Logger(ChattingService.name);
  constructor(
    @InjectRedis() private readonly redisClient: Redis,
    @InjectRepository(SessionInfo)
    private sessionRepository: Repository<SessionInfo>,
    @Inject(DataSource) private dataSource: DataSource,
  ) {}

  // 메세지 받기
  async sendMessage(client: Socket, message: string) {
    ChattingService.logger.debug('받은 메세지 : ' + message);

    // 메세지 요청한 클라이언트에게 메세지 전송
    client.emit('GetMessage', client.data.nickname + ':' + message);
    //현재 접속중인 방 모든 유저에게 메세지 전송
    client
      .to(client.data.roomId)
      .emit('GetMessage', client.data.nickname + ':' + message);
  }

  // 귓속말 특정 소켓에만 메세지 전송
  async sendDirectMessage(
    client: Socket,
    targetMemberId: any,
    message: string,
  ) {
    // if (!targetSocket || targetSocket === undefined) {
    //   return client.emit('GetMessage', '알림 : 귓속말 대상이 존재하지 않습니다.');
    // }

    // if (!targetSocket.connected) {
    //   return client.emit('GetMessage', '알림 : 귓속말 대상이 현재 오프라인 상태 입니다.');
    // }

    const targetSocket = await this.redisClient.get(`socket:${targetMemberId}`);

    ChattingService.logger.debug('payload' + { message });
    ChattingService.logger.debug(
      '받는 사람 : ' + JSON.parse(targetSocket).nickname,
    );
    ChattingService.logger.debug('받은 메세지 : ' + { message });

    //현재 클라이언트에게 메세지 전송
    client.emit(
      'GetMessage',
      `[DM]${JSON.parse(targetSocket).nickname}에게 보낸 메세지:${message}`,
    );

    // 특정 방에 접속해있는 특정 소켓에게만 메세지 전송
    client
      .to(JSON.parse(targetSocket).socketId)
      .emit(
        'GetMessage',
        `[DM]${JSON.parse(targetSocket).nickname}이 보낸 메세지 :${message}`,
      );
  }

  // 채팅 방 생성
  async createChatRoom(client: Socket, roomName: string) {
    const roomId = `room:${uuid()}`;
    ChattingService.logger.debug(roomId);
    const nickname: string = client.data.nickname;
    client.emit(
      'GetMessage',
      '"' + nickname + '"님이 "' + roomName + '"방을 생성하였습니다.',
    );

    this.redisClient.set(
      roomId,
      JSON.stringify({
        roomId: roomId,
        cheifId: client.data.memberId,
        roomName: roomName,
      }),
    );
    client.data.roomId = roomId;
    client.rooms.clear();
    client.join(roomId);
  }

  // 채팅 방 입장
  async enterChatRoom(server: Server, client: Socket, roomId: string) {
    const { nickname } = client.data;
    const roomName = await this.getChatRoom(client, roomId);

    client.data.roomId = roomId;
    client.rooms.clear();
    client.join(roomId);
    server
      .to(roomId)
      .emit(
        'GetMessage',
        `"${nickname}"님이 "${roomName}"방에 접속하셨습니다.`,
      );
  }

  // 채팅 방 나가기
  async exitChatRoom(server: Server, client: Socket, roomId: string) {
    client.data.roomId = `room:lobby`;
    client.rooms.clear();
    client.join(`room:lobby`);
    const { nickname } = client.data;
    server
      .to(roomId)
      .emit('GetMessage', '"' + nickname + '"님이 방에서 나갔습니다.');
  }

  // 방 가져오기
  async getChatRoom(client: Socket, roomId: string) {
    if (
      !this.redisClient.get(roomId) ||
      this.redisClient.get(roomId) === undefined
    ) {
      return client.emit('GetMessage', '알림 : 존재하지 않는 방입니다.');
    }

    const room = await this.redisClient.get(roomId);

    return JSON.parse(room).roomName;
  }

  // 접속중인 사용자 닉네임 리스트 가져오기
  async getPlayerList(client: Socket) {
    const playerList = await this.redisClient.keys('socket:*');
    const playerNickNameList = [];

    // playerList 순차적으로 조회하면서 닉네임만 추출
    for (let i = 0; i < playerList.length; i++) {
      const player = await this.redisClient.get(playerList[i]);
      playerNickNameList.push(JSON.parse(player).nickname);
    }

    client.emit('GetConnectedClientList', JSON.stringify(playerNickNameList));
  }

  // 방 리스트 가져오기
  async getChatRoomList() {
    const roomList = await this.redisClient.keys('room:*');
    const roomListData = [];
    for (let i = 0; i < roomList.length; i++) {
      const room = await this.redisClient.get(roomList[i]);
      roomListData.push(JSON.parse(room));
    }

    return roomListData;
  }

  // 방 삭제
  async deleteChatRoom(server: Server, roomId: string) {
    await this.redisClient.del(roomId); // redis에서 방 삭제
    server.sockets.adapter.rooms.delete(roomId);
  }
}
