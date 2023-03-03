import { Column, Entity, OneToMany } from 'typeorm';

import { MemberInquiryGroup } from './memberInquiryGroup.entity';
import { InquiryTemplate } from './inquiryTemplate.entity';

@Entity('inquiryType')
export class InquiryType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => InquiryTemplate, (inquirytemplate) => inquirytemplate.InquiryType)
  InquiryTemplates: InquiryTemplate[];

  @OneToMany(() => MemberInquiryGroup, (memberinquirygroup) => memberinquirygroup.InquiryType)
  MemberInquiryGroups: MemberInquiryGroup[];
}
