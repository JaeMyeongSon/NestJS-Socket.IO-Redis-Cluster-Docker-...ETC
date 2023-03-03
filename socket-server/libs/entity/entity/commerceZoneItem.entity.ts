import { PurchaseType } from './purchaseType.entity';

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { AvatarPartsGroupType } from './avatarPartsGroupType.entity';
import { AvatarPartsColorType } from './avatarPartsColorType.entity';
import { AvatarPartsSizeType } from './avatarPartsSizeType.entity';

@Index('groupType', ['groupType'], {})
@Index('colorType', ['colorType'], {})
@Index('sizeType', ['sizeType'], {})
@Entity('commerceZoneItem')
export class CommerceZoneItem {
  @Column('int', { primary: true, name: 'itemId' })
  itemId: number;

  @Column('int', { name: 'arwPrice' })
  arwPrice: number;

  @Column('int', { name: 'krwPrice' })
  krwPrice: number;

  @Column('int', { name: 'groupType' })
  groupType: number;

  @Column('int', { name: 'colorType' })
  colorType: number;

  @Column('int', { name: 'sizeType' })
  sizeType: number;

  @ManyToOne(() => AvatarPartsGroupType, (grouptype) => grouptype.CommerceZoneItems, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'groupType', referencedColumnName: 'type' }])
  AvatarPartsGroupType: AvatarPartsGroupType;

  @ManyToOne(() => AvatarPartsColorType, (colortype) => colortype.CommerceZoneItems, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'colorType', referencedColumnName: 'type' }])
  AvatarPartsColorType: AvatarPartsColorType;

  @ManyToOne(() => AvatarPartsSizeType, (sizetype) => sizetype.CommerceZoneItems, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'sizeType', referencedColumnName: 'type' }])
  AvatarPartsSizeType: AvatarPartsSizeType;
}
