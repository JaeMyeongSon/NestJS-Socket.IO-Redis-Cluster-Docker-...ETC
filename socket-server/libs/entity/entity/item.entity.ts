import { CommerceZoneMannequin } from './commerceZoneMannequin.entity';
import { AvatarPreset } from './avatarPreset.entity';
import { AvatarParts } from './avatarParts.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { InteriorInstallInfo } from './interiorInstallInfo.entity';
import { ItemType } from './itemType.entity';
import { CategoryType } from './categoryType.entity';
import { PackageType } from './packageType.entity';
import { Localization } from './localization.entity';
import { PurchaseType } from './purchaseType.entity';
import { SaleType } from './saleType.entity';
import { GradeType } from './gradeType.entity';
import { MemberInteriorItemInven } from './memberInteriorItemInven.entity';
import { MemberItemInven } from './memberItemInven.entity';
import { StartInventory } from './startInventory.entity';
import { StartMyRoom } from './startMyRoom.entity';
import { AvatarResetInfo } from './avatarResetInfo.entity';
import { MemberAvatarPartsItemInven } from './memberAvatarPartsItemInven.entity';
import { MemberAvatarInfo } from './memberAvatarInfo.entity';

@Index('itemType', ['itemType'], {})
@Index('categoryType', ['categoryType'], {})
@Index('packageType', ['packageType'], {})
@Index('name', ['name'], {})
@Index('description', ['description'], {})
@Index('purchaseType', ['purchaseType'], {})
@Index('saleType', ['saleType'], {})
@Index('gradeType', ['gradeType'], {})
@Entity('item')
export class Item {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'itemType' })
  itemType: number;

  @Column('int', { name: 'categoryType' })
  categoryType: number;

  @Column('int', { name: 'packageType' })
  packageType: number;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @Column('varchar', { name: 'description', length: 64 })
  description: string;

  @Column('varchar', { name: 'prefab', length: 64 })
  prefab: string;

  @Column('varchar', { name: 'material', length: 64 })
  material: string;

  @Column('varchar', { name: 'thumbnail', length: 64 })
  thumbnail: string;

  @Column('int', { name: 'isNesting' })
  isNesting: number;

  @Column('int', { name: 'capacity' })
  capacity: number;

  @Column('int', { name: 'purchaseType' })
  purchaseType: number;

  @Column('int', { name: 'purchasePrice' })
  purchasePrice: number;

  @Column('int', { name: 'saleType' })
  saleType: number;

  @Column('int', { name: 'salePrice' })
  salePrice: number;

  @Column('int', { name: 'gradeType' })
  gradeType: number;

  @OneToOne(() => InteriorInstallInfo, (interiorinstallinfo) => interiorinstallinfo.Item)
  InteriorInstallInfo: InteriorInstallInfo;

  @ManyToOne(() => ItemType, (itemtype) => itemtype.Items, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemType', referencedColumnName: 'type' }])
  ItemType: ItemType;

  @ManyToOne(() => CategoryType, (categorytype) => categorytype.Items, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'categoryType', referencedColumnName: 'type' }])
  CategoryType: CategoryType;

  @ManyToOne(() => PackageType, (packagetype) => packagetype.Items, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'packageType', referencedColumnName: 'type' }])
  PackageType: PackageType;

  @ManyToOne(() => Localization, (localization) => localization.LocalizationItemName, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'name', referencedColumnName: 'id' }])
  LocalizationName: Localization;

  @ManyToOne(() => Localization, (localization) => localization.LocalizationItemDesc, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'description', referencedColumnName: 'id' }])
  LocalizationDesc: Localization;

  @ManyToOne(() => PurchaseType, (purchasetype) => purchasetype.Items, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'purchaseType', referencedColumnName: 'type' }])
  PurchaseType: PurchaseType;

  @ManyToOne(() => SaleType, (saletype) => saletype.Items, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'saleType', referencedColumnName: 'type' }])
  SaleType: SaleType;

  @ManyToOne(() => GradeType, (gradetype) => gradetype.Items, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'gradeType', referencedColumnName: 'type' }])
  GradeType: GradeType;

  @OneToMany(() => MemberInteriorItemInven, (memberinterioriteminven) => memberinterioriteminven.Item)
  MemberInteriorItemInvens: MemberInteriorItemInven[];

  @OneToMany(() => MemberAvatarPartsItemInven, (memberavatarpartsiteminven) => memberavatarpartsiteminven.Item)
  MemberAvatarPartsItemInvens: MemberAvatarPartsItemInven[];

  @OneToMany(() => MemberItemInven, (memberiteminven) => memberiteminven.Item)
  MemberItemInvens: MemberItemInven[];

  @OneToMany(() => StartInventory, (startinventory) => startinventory.Item)
  StartInventorys: StartInventory[];

  @OneToMany(() => StartMyRoom, (startmyroom) => startmyroom.Item)
  StartMyRooms: StartMyRoom[];

  @OneToMany(() => AvatarParts, (avatarparts) => avatarparts.Item)
  AvatarParts: AvatarParts[];

  @OneToMany(() => AvatarPreset, (avatarpreset) => avatarpreset.Item)
  AvatarPresets: AvatarPreset[];

  @OneToMany(() => CommerceZoneMannequin, (avatarpreset) => avatarpreset.Item)
  CommerceZoneMannequins: CommerceZoneMannequin[];

  @OneToMany(() => AvatarResetInfo, (avatarresetinfo) => avatarresetinfo.Item)
  AvatarResetInfos: AvatarResetInfo[];

  @OneToMany(() => MemberAvatarInfo, (avatarinfo) => avatarinfo.Item)
  MemberAvatarInfos: MemberAvatarInfo[];
}
