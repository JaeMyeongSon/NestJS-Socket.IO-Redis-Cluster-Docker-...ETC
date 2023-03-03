import { CommerceZoneItem } from './commerceZoneItem.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { AvatarParts } from './avatarParts.entity';

@Entity('avatarpartscolortype')
export class AvatarPartsColorType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => AvatarParts, (avatarparts) => avatarparts.AvatarPartsColorType)
  AvatarParts: AvatarParts[];

  @OneToMany(() => CommerceZoneItem, (item) => item.AvatarPartsColorType)
  CommerceZoneItems: CommerceZoneItem[];
}
