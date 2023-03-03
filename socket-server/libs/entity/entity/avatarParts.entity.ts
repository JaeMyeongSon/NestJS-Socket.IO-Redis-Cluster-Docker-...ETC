import { Item } from './item.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { AvatarPartsType } from './avatarPartsType.entity';
import { AvatarPartsDivisionType } from './avatarPartsDivisionType.entity';
import { AvatarPartsSizeType } from './avatarPartsSizeType.entity';
import { AvatarPartsColorType } from './avatarPartsColorType.entity';
import { AvatarPartsGroupType } from './avatarPartsGroupType.entity';

@Index('avatarPartsType', ['avatarPartsType'], {})
@Index('divisionType', ['divisionType'], {})
@Index('sizeType', ['sizeType'], {})
@Index('colorType', ['colorType'], {})
@Index('groupType', ['groupType'], {})
@Index('itemId', ['itemId'], {})
@Entity('avatarparts')
export class AvatarParts {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'avatarPartsType' })
  avatarPartsType: number;

  @Column('int', { name: 'chatId' })
  chatId: number;

  @Column('varchar', { name: 'prefabName', nullable: true, length: 64 })
  prefabName: string | null;

  @Column('varchar', { name: 'materialName', nullable: true, length: 64 })
  materialName: string | null;

  @Column('varchar', { name: 'thumbnailName', length: 64 })
  thumbnailName: string;

  @Column('varchar', {
    name: 'productThumbnailName',
    nullable: true,
    length: 64,
  })
  productThumbnailName: string | null;

  @Column('varchar', { name: 'effectName', nullable: true, length: 64 })
  effectName: string | null;

  @Column('varchar', { name: 'aniName', nullable: true, length: 64 })
  aniName: string | null;

  @Column('int', { name: 'divisionType' })
  divisionType: number;

  @Column('int', { name: 'questText' })
  questText: number;

  @Column('varchar', { name: 'description', length: 256 })
  description: string;

  @Column('int', { name: 'nameId' })
  nameId: number;

  @Column('int', { name: 'sizeType' })
  sizeType: number;

  @Column('int', { name: 'colorType' })
  colorType: number;

  @Column('int', { name: 'groupType' })
  groupType: number;

  @Column('int', { name: 'partsOrder' })
  partsOrder: number;

  @Column('int', { name: 'itemId' })
  itemId: number;

  @ManyToOne(() => AvatarPartsType, (avatarpartstype) => avatarpartstype.AvatarParts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'avatarPartsType', referencedColumnName: 'type' }])
  AvatarPartsType: AvatarPartsType;

  @ManyToOne(() => AvatarPartsDivisionType, (avatarpartsdivisiontype) => avatarpartsdivisiontype.AvatarParts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'divisionType', referencedColumnName: 'type' }])
  AvatarPartsDivisionType: AvatarPartsDivisionType;

  @ManyToOne(() => AvatarPartsSizeType, (avatarpartssizetype) => avatarpartssizetype.AvatarParts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'sizeType', referencedColumnName: 'type' }])
  AvatarPartsSizeType: AvatarPartsSizeType;

  @ManyToOne(() => AvatarPartsColorType, (avatarpartscolortype) => avatarpartscolortype.AvatarParts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'colorType', referencedColumnName: 'type' }])
  AvatarPartsColorType: AvatarPartsColorType;

  @ManyToOne(() => AvatarPartsGroupType, (avatarpartsgrouptype) => avatarpartsgrouptype.AvatarParts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'groupType', referencedColumnName: 'type' }])
  AvatarPartsGroupType: AvatarPartsGroupType;

  @ManyToOne(() => Item, (item) => item.AvatarParts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemId', referencedColumnName: 'id' }])
  Item: Item;
}
