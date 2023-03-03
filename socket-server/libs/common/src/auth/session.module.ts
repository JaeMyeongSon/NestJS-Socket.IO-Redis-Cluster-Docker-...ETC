import { SessionService } from './session.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Member, SessionInfo } from '@lib/entity';

@Module({
  imports: [TypeOrmModule.forFeature([Member, SessionInfo])],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
