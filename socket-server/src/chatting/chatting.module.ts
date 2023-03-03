import { Module } from '@nestjs/common';
import { ChattingService } from './chatting.service';
import { ChattingController } from './chatting.controller';
import { ChattingGateway } from './gateway/chatting.gateway';

@Module({
  providers: [ChattingService, ChattingGateway],
  controllers: [ChattingController],
})
export class ChattingModule {}
