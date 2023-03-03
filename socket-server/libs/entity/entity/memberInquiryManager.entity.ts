import { InquiryAnswerType } from './inquiryAnswerType.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MemberInquiry } from './memberInquiry.entity';
import { MemberInquiryAnswer } from './memberInquiryAnswer.entity';

@Entity('memberInquiryManager')
export class MemberInquiryManager {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'answerType' })
  answerType: number;

  @Column('date', { name: 'reservationAt', nullable: true })
  reservationAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToOne(() => MemberInquiry, (memberinquiry) => memberinquiry.MemberInquiryManager)
  MemberInquiry: MemberInquiry;

  @OneToOne(() => MemberInquiryAnswer, (memberinquiryanswer) => memberinquiryanswer.MemberInquiryManager)
  MemberInquiryAnswer: MemberInquiryAnswer;

  @ManyToOne(() => InquiryAnswerType, (inquiryanswertype) => inquiryanswertype.MemberInquiryManagers, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'answerType', referencedColumnName: 'type' }])
  InquiryAnswerType: InquiryAnswerType;
}
