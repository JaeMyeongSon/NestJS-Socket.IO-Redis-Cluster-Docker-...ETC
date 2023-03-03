import { Column, Entity, OneToMany } from 'typeorm';
import { MemberAccount } from './memberAccount.entity';
import { MemberLoginLog } from './memberLoginLog.entity';
import { Member } from './member.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('providertype')
export class ProviderType {
  @ApiProperty({
    example: 1,
    description: '회원 유형 타입',
  })
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @ApiProperty({
    example: '구글',
    description: '타입 이름',
  })
  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => Member, (member) => member.ProviderType)
  Members: Member[];

  @OneToMany(() => MemberAccount, (memberaccount) => memberaccount.ProviderType)
  MemberAccounts: MemberAccount[];

  @OneToMany(() => MemberLoginLog, (memberloginlog) => memberloginlog.ProviderType)
  MemberLoginLogs: MemberLoginLog[];
}
