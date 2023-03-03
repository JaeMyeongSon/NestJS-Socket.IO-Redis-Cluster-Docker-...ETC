import { MemberDefaultCardInfo } from '@lib/entity';
import { PurchaseType } from './purchaseType.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Localization } from './localization.entity';
import { MemberBusinessCardInfo } from './memberBusinessCardInfo.entity';

@Index('description', ['description'], {})
@Index('purchaseType', ['purchaseType'], {})
@Entity('businessCardTemplate')
export class BusinessCardTemplate {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'description', length: 64 })
  description: string;

  @Column('int', { name: 'purchaseType' })
  purchaseType: number;

  @Column('int', { name: 'price' })
  price: number;

  @Column('int', { name: 'nameField' })
  nameField: number;

  @Column('int', { name: 'phoneField' })
  phoneField: number;

  @Column('int', { name: 'emailField' })
  emailField: number;

  @Column('int', { name: 'faxField' })
  faxField: number;

  @Column('int', { name: 'addrField' })
  addrField: number;

  @Column('int', { name: 'jobField' })
  jobField: number;

  @Column('int', { name: 'positionField' })
  positionField: number;

  @Column('int', { name: 'introField' })
  introField: number;

  @Column('varchar', { name: 'thumbnailName', length: 64 })
  thumbnailName: string;

  @ManyToOne(() => Localization, (localization) => localization.BusinessCardTemplates, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'description', referencedColumnName: 'id' }])
  LocalizationDesc: Localization;

  @ManyToOne(() => PurchaseType, (purchasetype) => purchasetype.BusinessCardTemplates, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'purchaseType', referencedColumnName: 'type' }])
  PurchaseType: PurchaseType;

  @OneToMany(() => MemberBusinessCardInfo, (memberbusinesscardinfo) => memberbusinesscardinfo.BusinessCardTemplate)
  MemberBusinessCardInfos: MemberBusinessCardInfo[];

  @OneToMany(() => MemberDefaultCardInfo, (memberdefaultcardinfo) => memberdefaultcardinfo.BusinessCardTemplate)
  MemberDefaultCardInfos: MemberBusinessCardInfo[];
}
