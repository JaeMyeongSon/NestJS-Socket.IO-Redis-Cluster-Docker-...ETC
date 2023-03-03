import { MemberInquiryManager } from './memberInquiryManager.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity('inquiryAnswerType')
export class InquiryAnswerType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => MemberInquiryManager, (state) => state.InquiryAnswerType)
  MemberInquiryManagers: MemberInquiryManager[];
}
