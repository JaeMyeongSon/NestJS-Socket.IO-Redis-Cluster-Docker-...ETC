import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { InquiryType } from './inquiryType.entity';
import { MemberInquiry } from './memberInquiry.entity';
import { Member } from './member.entity';

@Index('inquiryType', ['inquiryType'], {})
@Index('memberId', ['memberId'], {})
@Entity('memberInquiryGroup')
export class MemberInquiryGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'inquiryType' })
  inquiryType: number;

  @Column('varchar', { name: 'memberId', length: 100 })
  memberId: string;

  @Column('varchar', { name: 'subject', length: 64 })
  subject: string;

  @Column('varchar', { name: 'email', length: 64 })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @ManyToOne(() => InquiryType, (inquirytype) => inquirytype.MemberInquiryGroups, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'inquiryType', referencedColumnName: 'type' }])
  InquiryType: InquiryType;

  @ManyToOne(() => Member, (member) => member.MemberInquiryGroups, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @OneToMany(() => MemberInquiry, (inquiry) => inquiry.MemberInquiryGroup)
  MemberInquiries: MemberInquiry[];
}
