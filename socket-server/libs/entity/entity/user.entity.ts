import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AdminLog } from './adminLog.entity';
import { Gateway } from './gateway.entity';
import { News } from './news.entity';
import { PopupInfo } from './popupInfo.entity';
import { Terms } from './terms.entity';
import { TopBillboardPopupInfo } from './topBillboardPopupInfo.entity';
import { RoleType } from './roleType.entity';
import { VoteInfo } from './voteInfo.entity';
import { VideoPlayInfo } from './videoPlayInfo.entity';
import { ApiProperty } from '@nestjs/swagger';
import { MemberInquiryAnswer } from './memberInquiryAnswer.entity';
import { InquiryTemplate } from './inquiryTemplate.entity';
import { MemberReportInfo } from './memberReportInfo.entity';

@Index('email', ['email'], { unique: true })
@Index('roleType', ['roleType'], {})
@Entity('user')
export class User {
  @ApiProperty({
    example: 1,
    description: '관리자 아이디',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', unique: true, length: 64 })
  email: string;

  @ApiProperty({
    example: '송중기',
    description: '관리자 이름',
  })
  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('varchar', { name: 'password', length: 100 })
  password: string;

  @Column('int', { name: 'roleType' })
  roleType: number;

  @Column('varchar', { name: 'department', nullable: true, length: 64 })
  department: string | null;

  @Column('varchar', {
    name: 'company',
    nullable: true,
    length: 64,
    default: () => "'한컴프론티스'",
  })
  company: string | null;

  @Column('varchar', { name: 'phoneNumber', length: 64 })
  phoneNumber: string;

  @Column('datetime', { name: 'loginedAt' })
  loginedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => AdminLog, (adminlog) => adminlog.Admin)
  AdminLogs: AdminLog[];

  @OneToMany(() => Gateway, (gateway) => gateway.Admin)
  gateways: Gateway[];

  @OneToMany(() => News, (news) => news.Admin)
  news: News[];

  @OneToMany(() => PopupInfo, (popupinfo) => popupinfo.Admin)
  popupInfos: PopupInfo[];

  @OneToMany(() => Terms, (terms) => terms.admin)
  terms: Terms[];

  @OneToMany(() => TopBillboardPopupInfo, (topbillboardpopupinfo) => topbillboardpopupinfo.Admin)
  TopBillboardPopupInfos: TopBillboardPopupInfo[];

  @ManyToOne(() => RoleType, (roletype) => roletype.Admins, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'roleType', referencedColumnName: 'type' }])
  RoleType: RoleType;

  @OneToMany(() => VideoPlayInfo, (videoplayinfo) => videoplayinfo.Admin)
  VideoPlayInfos: VideoPlayInfo[];

  @OneToMany(() => InquiryTemplate, (inquirytemplate) => inquirytemplate.Admin)
  InquiryTemplates: InquiryTemplate[];

  @OneToMany(() => VoteInfo, (voteinfo) => voteinfo.Admin)
  VoteInfos: VoteInfo[];

  @OneToMany(() => MemberInquiryAnswer, (memberinquiryanswer) => memberinquiryanswer.Admin)
  MemberInquiryAnswers: MemberInquiryAnswer[];

  @OneToMany(() => MemberReportInfo, (memberreportinfo) => memberreportinfo.Admin)
  MemberReportInfos: MemberReportInfo[];
}
