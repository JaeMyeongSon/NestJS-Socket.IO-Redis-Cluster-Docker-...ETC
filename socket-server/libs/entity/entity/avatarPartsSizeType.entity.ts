import { Column, Entity, OneToMany } from 'typeorm';
import { AvatarParts } from './avatarParts.entity';
import { CommerceZoneItem } from './commerceZoneItem.entity';

@Entity('avatarpartssizetype')
export class AvatarPartsSizeType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => AvatarParts, (avatarparts) => avatarparts.AvatarPartsSizeType)
  AvatarParts: AvatarParts[];

  @OneToMany(() => CommerceZoneItem, (item) => item.AvatarPartsGroupType)
  CommerceZoneItems: CommerceZoneItem[];
}
