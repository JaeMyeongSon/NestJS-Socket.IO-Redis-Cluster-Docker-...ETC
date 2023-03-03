import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Localization } from './localization.entity';
import { AvatarPartsType } from './avatarPartsType.entity';

@Index('chat', ['chat'], {})
@Index('partsType', ['partsType'], {})
@Entity('itemUseEffect')
export class ItemUseEffect {
  @Column('int', { primary: true, name: 'itemId' })
  itemId: number;

  @Column('varchar', { name: 'chat', length: 64 })
  chat: string;

  @Column('varchar', { name: 'animationName', length: 64 })
  animationName: string;

  @Column('int', { name: 'partsType' })
  partsType: number;

  @ManyToOne(() => Localization, (localization) => localization.ItemUseEffects, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'chat', referencedColumnName: 'id' }])
  LocalizationChat: Localization;

  @ManyToOne(() => AvatarPartsType, (avatarpartstype) => avatarpartstype.ItemUseEffects, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'partsType', referencedColumnName: 'type' }])
  AvatarPartsType: AvatarPartsType;
}
