import { Column, Entity, OneToMany } from 'typeorm';
import { AvatarParts } from './avatarParts.entity';

@Entity('avatarpartsdivisiontype')
export class AvatarPartsDivisionType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => AvatarParts, (avatarparts) => avatarparts.AvatarPartsDivisionType)
  AvatarParts: AvatarParts[];
}
