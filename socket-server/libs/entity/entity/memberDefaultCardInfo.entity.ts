import { BusinessCardTemplate } from './businessCardTemplate.entity';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToOne, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';

@Index('templateId', ['templateId'], {})
@Entity('memberDefaultCardInfo')
export class MemberDefaultCardInfo {
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @Column('int', { name: 'templateId', default: () => "'1'" })
  templateId: number;

  @Column('int', { name: 'num', default: () => "'1'" })
  num: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Member, (member) => member.MemberDefaultCardInfo, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @ManyToOne(() => BusinessCardTemplate, (businesscardtemplate) => businesscardtemplate.MemberDefaultCardInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'templateId', referencedColumnName: 'id' }])
  BusinessCardTemplate: BusinessCardTemplate;
}
