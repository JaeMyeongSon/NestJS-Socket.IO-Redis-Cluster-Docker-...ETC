import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AvatarParts } from './avatarParts.entity';
import { CommerceZoneItem } from './commerceZoneItem.entity';
import { Localization } from './localization.entity';

@Index('name', ['name'], {})
@Entity('avatarpartsgrouptype')
export class AvatarPartsGroupType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @OneToMany(() => AvatarParts, (avatarparts) => avatarparts.AvatarPartsGroupType)
  AvatarParts: AvatarParts[];

  @OneToMany(() => CommerceZoneItem, (item) => item.AvatarPartsGroupType)
  CommerceZoneItems: CommerceZoneItem[];

  @ManyToOne(() => Localization, (localization) => localization.AvatarPartsGroupTypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'name', referencedColumnName: 'id' }])
  LocalizationName: Localization;
}
