import { SessionModule } from './auth/session.module';
import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { JwtAuthModule } from './auth/jwt.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Member,
  MemberAccount,
  MemberAvatarPartsItemInven,
  MemberInteriorItemInven,
  MemberMyRoomInfo,
  StartInventory,
  StartMyRoom,
  EntityModule,
} from '@lib/entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Member,
      MemberAccount,
      MemberInteriorItemInven,
      MemberAvatarPartsItemInven,
      MemberMyRoomInfo,
      StartInventory,
      StartMyRoom,
    ]),
    SessionModule,
    JwtAuthModule,
    EntityModule,
    CommonModule,
  ],
  providers: [CommonService],
  exports: [CommonService, SessionModule, JwtAuthModule],
})
export class CommonModule {}
