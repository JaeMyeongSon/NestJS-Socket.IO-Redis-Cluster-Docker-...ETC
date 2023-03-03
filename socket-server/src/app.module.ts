import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerGateway } from './manager/gateway/manager.gateway';
import { ManagerService } from './manager/manager.service';
import { ManagerController } from './manager/manager.controller';
import { ManagerModule } from './manager/manager.module';
import { ChattingModule } from './chatting/chatting.module';

@Module({
  imports: [ManagerModule, ChattingModule],
  controllers: [AppController, ManagerController],
  providers: [AppService, ManagerGateway, ManagerService],
})
export class AppModule {}
