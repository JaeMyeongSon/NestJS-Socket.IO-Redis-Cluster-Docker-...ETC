import { Item } from './item.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AvatarPartsType } from './avatarPartsType.entity';

@Index('itemId', ['itemId'], {})
@Entity('avatarResetInfo')
export class AvatarResetInfo {
  @Column('int', { primary: true, name: 'partsType' })
  partsType: number;

  @Column('int', { name: 'itemId' })
  itemId: number;

  @ManyToOne(() => AvatarPartsType, (avatarpartstype) => avatarpartstype.AvatarResetInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'partsType', referencedColumnName: 'type' }])
  AvatarPartsType: AvatarPartsType;

  @ManyToOne(() => Item, (item) => item.AvatarResetInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemId', referencedColumnName: 'id' }])
  Item: Item;
}
