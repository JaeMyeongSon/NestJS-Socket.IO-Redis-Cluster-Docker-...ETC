import { Item } from './item.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AvatarPresetType } from './avatarPresetType.entity';
import { AvatarPartsType } from './avatarPartsType.entity';
import { AvatarParts } from './avatarParts.entity';

@Index('partsType', ['partsType'], {})
@Index('itemId', ['itemId'], {})
@Entity('avatarpreset')
export class AvatarPreset {
  @Column('int', { primary: true, name: 'presetType' })
  presetType: number;

  @Column('int', { primary: true, name: 'partsType' })
  partsType: number;

  @Column('int', { name: 'itemId' })
  itemId: number;

  @ManyToOne(() => AvatarPresetType, (avatarpresettype) => avatarpresettype.AvatarPresets, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'presetType', referencedColumnName: 'type' }])
  AvatarPresetType: AvatarPresetType;

  @ManyToOne(() => AvatarPartsType, (avatarpartstype) => avatarpartstype.AvatarPresets, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'partsType', referencedColumnName: 'type' }])
  AvatarPartsType: AvatarPartsType;

  @ManyToOne(() => Item, (item) => item.AvatarPresets, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemId', referencedColumnName: 'id' }])
  Item: Item;
}
