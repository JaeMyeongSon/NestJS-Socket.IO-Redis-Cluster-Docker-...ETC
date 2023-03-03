import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';
import { MemberOfficeReservationInfo } from './memberOfficeReservationInfo.entity';

@Index('reservationId', ['reservationId'], {})
@Index('memberId', ['memberId'], {})
@Entity('memberOfficeReservationWaitingInfo')
export class MemberOfficeReservationWaitingInfo {
  @Column('int', { primary: true, name: 'reservationId' })
  reservationId: number;

  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Member, (member) => member.MemberOfficeReservationWaitingInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @ManyToOne(() => MemberOfficeReservationInfo, (info) => info.MemberOfficeReservationWaitingInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'reservationId', referencedColumnName: 'id' }])
  MemberOfficeReservationWaitingInfo: MemberOfficeReservationWaitingInfo;
}
