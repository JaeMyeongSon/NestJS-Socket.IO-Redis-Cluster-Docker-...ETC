import { Column, Entity, OneToMany } from 'typeorm';
import { AvatarPreset } from './avatarPreset.entity';

@Entity('avatarpresettype')
export class AvatarPresetType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => AvatarPreset, (avatarpreset) => avatarpreset.AvatarPresetType)
  AvatarPresets: AvatarPreset[];
}
