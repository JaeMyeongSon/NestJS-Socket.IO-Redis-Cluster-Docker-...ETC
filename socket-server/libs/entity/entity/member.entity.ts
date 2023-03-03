import { MemberInquiryAnswer, MemberInquiryGroup } from '@lib/entity';
import { MemberNicknameLog } from './memberNicknameLog.entity';
import { MemberBusinessCardInfo } from './memberBusinessCardInfo.entity';
import { OfficeGradeType } from './officeGradeType.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';
import { BlockMember } from './blockMember.entity';
import { FriendRequest } from './friendRequest.entity';
import { InfiniteCodeRank } from './infiniteCodeRank.entity';
import { MemberAccount } from './memberAccount.entity';
import { MemberAvatarInfo } from './memberAvatarInfo.entity';
import { MemberFriend } from './memberFriend.entity';
import { MemberInfiniteCodeRank } from './memberInfiniteCodeRank.entity';
import { MemberInteriorItemInven } from './memberInteriorItemInven.entity';
import { MemberItemInven } from './memberItemInven.entity';
import { MemberLoginLog } from './memberLoginLog.entity';
import { MemberReportInfo } from './memberReportInfo.entity';
import { MemberVoteInfo } from './memberVoteInfo.entity';
import { NewsViews } from './newsViews.entity';
import { SessionInfo } from './sessionInfo.entity';
import { MemberOfficeReservationInfo } from './memberOfficeReservationInfo.entity';
import { MemberOfficeReservationWaitingInfo } from './memberOfficeReservationWaitingInfo.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ProviderType } from './providerType.entity';
import { MemberDefaultCardInfo } from './memberDefaultCardInfo.entity';
import { MemberAvatarPartsItemInven } from './memberAvatarPartsItemInven.entity';
import { MemberInquiry } from './memberInquiry.entity';

@Index('memberId', ['memberId'], { unique: true })
@Index('memberCode', ['memberCode'], { unique: true })
@Index('email', ['email'], {})
@Index('nickname', ['nickname'], {})
@Index('officeGradeType', ['officeGradeType'], {})
@Index('firstProviderType', ['firstProviderType'], {})
@Entity('member')
export class Member {
  @ApiProperty({
    example: '3ad64-1cleo33....',
    description: '회원아이디',
  })
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @ApiProperty({
    example: 'DVE53G856M',
    description: '회원코드',
  })
  @Column('varchar', { name: 'memberCode', unique: true, length: 100 })
  memberCode: string;

  @Column('varchar', { name: 'email', nullable: true, length: 64 })
  email: string | null;

  @Column('varchar', { name: 'nickname', nullable: true, length: 64 })
  nickname: string | null;

  @Column('varchar', { name: 'stateMessage', nullable: true, length: 128 })
  stateMessage: string | null;

  @Column('int', { name: 'seqLoginCnt', default: () => "'0'" })
  seqLoginCnt: number;

  @Column('int', { name: 'totalLoginCnt', default: () => "'0'" })
  totalLoginCnt: number;

  @Column('int', { name: 'officeGradeType', default: () => "'1'" })
  officeGradeType: number;

  @Column('int', { name: 'providerType', default: () => "'1'" })
  providerType: number;

  @Column('int', { name: 'firstProviderType', default: () => "'1'" })
  firstProviderType: number;

  @Column('datetime', { name: 'loginedAt' })
  loginedAt: Date;

  @Column('datetime', { name: 'passwdUpdatedAt', nullable: true })
  passwdUpdatedAt: Date | null;

  @Column('datetime', { name: 'emailUpdatedAt', nullable: true })
  emailUpdatedAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => BlockMember, (blockmember) => blockmember.Member)
  Members: BlockMember[];

  @OneToMany(() => BlockMember, (blockmember) => blockmember.BlockMember)
  BlockMembers: BlockMember[];

  @OneToMany(() => FriendRequest, (friendrequest) => friendrequest.RequestMember)
  RequestMembers: FriendRequest[];

  @OneToMany(() => FriendRequest, (friendrequest) => friendrequest.ReceivedMember)
  ReceivedMembers: FriendRequest[];

  @OneToOne(() => InfiniteCodeRank, (infinitecoderank) => infinitecoderank.Member)
  InfiniteCodeRank: InfiniteCodeRank;

  @OneToMany(() => MemberAccount, (memberaccount) => memberaccount.Member)
  MemberAccounts: MemberAccount[];

  @OneToMany(() => MemberAvatarInfo, (memberavatarinfo) => memberavatarinfo.Member)
  MemberAvatarInfos: MemberAvatarInfo[];

  @OneToMany(() => MemberFriend, (memberfriend) => memberfriend.Member)
  OwnerMembers: MemberFriend[];

  @OneToMany(() => MemberFriend, (memberfriend) => memberfriend.friendMember)
  MemberFriends: MemberFriend[];

  @OneToMany(() => MemberNicknameLog, (membernicknamelog) => membernicknamelog.Member)
  MemberNicknameLogs: MemberNicknameLog[];

  @OneToMany(() => MemberInfiniteCodeRank, (memberinfinitecoderank) => memberinfinitecoderank.Member)
  MemberInfiniteCodeRanks: MemberInfiniteCodeRank[];

  @OneToMany(() => MemberInteriorItemInven, (memberinterioriteminven) => memberinterioriteminven.Member)
  MemberInteriorItemInvens: MemberInteriorItemInven[];

  @OneToMany(() => MemberAvatarPartsItemInven, (memberavatarpartsiteminven) => memberavatarpartsiteminven.Member)
  MemberAvatarPartsItemInvens: MemberAvatarPartsItemInven[];

  @OneToMany(() => MemberItemInven, (memberiteminven) => memberiteminven.Member)
  MemberItemInvens: MemberItemInven[];

  @OneToMany(() => MemberLoginLog, (memberloginlog) => memberloginlog.Member)
  MemberLoginLogs: MemberLoginLog[];

  @OneToMany(() => MemberReportInfo, (memberreportinfo) => memberreportinfo.ReportMember)
  MemberReportInfos: MemberReportInfo[];

  @OneToMany(() => MemberReportInfo, (memberreportinfo) => memberreportinfo.TargetMember)
  MemberReportTargetInfos: MemberReportInfo[];

  @OneToMany(() => MemberVoteInfo, (membervoteinfo) => membervoteinfo.Member)
  MemberVoteInfos: MemberVoteInfo[];

  @OneToMany(() => NewsViews, (newsviews) => newsviews.Member)
  NewsViews: NewsViews[];

  @OneToMany(() => MemberOfficeReservationInfo, (memberOfficeReservationInfo) => memberOfficeReservationInfo.Member)
  MemberOfficeReservationInfos: MemberOfficeReservationInfo[];

  @OneToMany(
    () => MemberOfficeReservationWaitingInfo,
    (memberOfficeReservationWaitingInfo) => memberOfficeReservationWaitingInfo.Member,
  )
  MemberOfficeReservationWaitingInfos: MemberOfficeReservationWaitingInfo[];

  @OneToMany(() => MemberBusinessCardInfo, (memberBusinessCardInfo) => memberBusinessCardInfo.Member)
  MemberBusinessCardInfos: MemberBusinessCardInfo[];

  @OneToMany(() => MemberInquiryGroup, (inquiry) => inquiry.Member)
  MemberInquiryGroups: MemberInquiryGroup[];

  @ManyToOne(() => OfficeGradeType, (type) => type.Members, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'officeGradeType', referencedColumnName: 'type' }])
  OfficeGradeType: OfficeGradeType;

  @ManyToOne(() => ProviderType, (type) => type.Members, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'firstProviderType', referencedColumnName: 'type' }])
  ProviderType: ProviderType;

  @OneToOne(() => SessionInfo, (sessioninfo) => sessioninfo.Member)
  SessionInfo: SessionInfo;

  @OneToOne(() => MemberDefaultCardInfo, (memberDefaultCardInfo) => memberDefaultCardInfo.Member)
  MemberDefaultCardInfo: MemberDefaultCardInfo;
}
