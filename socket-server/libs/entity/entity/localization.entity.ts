import { ItemUseEffect } from './itemUseEffect.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Item } from './item.entity';
import { OfficeMode } from './officeMode.entity';
import { OfficeSpaceInfo } from './officeSpaceInfo.entity';
import { BusinessCardTemplate } from './businessCardTemplate.entity';
import { OfficeModeType } from './officeModeType.entity';
import { OfficeGradeType } from './officeGradeType.entity';
import { OfficeTopicType } from './officeTopicType.entity';
import { OfficePermissionType } from './officePermissionType.entity';
import { PaymentType } from './paymentType.entity';
import { CategoryType } from './categoryType.entity';
import { OfficeAlarmType } from './officeAlarmType.entity';
import { AvatarPartsGroupType } from './avatarPartsGroupType.entity';

@Entity('localization')
export class Localization {
  @Column('varchar', { primary: true, name: 'id', length: 64 })
  id: string;

  @Column('text', { name: 'kor', nullable: true })
  kor: string | null;

  @Column('text', { name: 'eng', nullable: true })
  eng: string | null;

  @OneToMany(() => Item, (item) => item.name)
  LocalizationItemName: Item[];

  @OneToMany(() => Item, (item) => item.description)
  LocalizationItemDesc: Item[];

  @OneToMany(() => OfficeMode, (officemode) => officemode.LocalizationRoomName)
  OfficeModeRoomName: OfficeMode[];

  @OneToMany(() => OfficeMode, (officemode) => officemode.LocalizationRoomDesc)
  OfficeModeRoomDesc: OfficeMode[];

  @OneToMany(() => OfficeMode, (officemode) => officemode.LocalizationModeDesc)
  OfficeModeDesc: OfficeMode[];

  @OneToMany(() => OfficeSpaceInfo, (officespaceinfo) => officespaceinfo.LocalizationDesc)
  OfficeSpaceInfoDescs: OfficeSpaceInfo[];

  @OneToMany(() => OfficeSpaceInfo, (officespaceinfo) => officespaceinfo.LocalizationName)
  OfficeSpaceInfoNames: OfficeSpaceInfo[];

  @OneToMany(() => BusinessCardTemplate, (businesscardtemplate) => businesscardtemplate.LocalizationDesc)
  BusinessCardTemplates: BusinessCardTemplate[];

  @OneToMany(() => ItemUseEffect, (itemuseeffect) => itemuseeffect.LocalizationChat)
  ItemUseEffects: ItemUseEffect[];

  @OneToMany(() => OfficeModeType, (officemodetype) => officemodetype.LocalizationModeType)
  OfficeModeTypes: OfficeModeType[];

  @OneToMany(() => OfficeGradeType, (officegradetype) => officegradetype.LocalizationName)
  OfficeGradeTypes: OfficeGradeType[];

  @OneToMany(() => OfficeTopicType, (officetopictype) => officetopictype.LocalizationName)
  OfficeTopicTypes: OfficeTopicType[];

  @OneToMany(() => OfficePermissionType, (officepermissiontype) => officepermissiontype.LocalizationName)
  OfficePermissionTypes: OfficePermissionType[];

  @OneToMany(() => PaymentType, (paymenttype) => paymenttype.LocalizationName)
  PaymentTypes: PaymentType[];

  @OneToMany(() => CategoryType, (categorytype) => categorytype.LocalizationName)
  CategoryTypes: CategoryType[];

  @OneToMany(() => OfficeAlarmType, (officealarmtype) => officealarmtype.LocalizationName)
  OfficeAlarmTypes: OfficeAlarmType[];

  @OneToMany(() => AvatarPartsGroupType, (officealarmtype) => officealarmtype.LocalizationName)
  AvatarPartsGroupTypes: AvatarPartsGroupType[];
}
