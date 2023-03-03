import { Column, Entity, OneToMany } from 'typeorm';
import { AvatarParts } from './avatarParts.entity';
import { AvatarPreset } from './avatarPreset.entity';
import { CommerceZoneMannequin } from './commerceZoneMannequin.entity';
import { MemberAvatarInfo } from './memberAvatarInfo.entity';
import { AvatarResetInfo } from './avatarResetInfo.entity';
import { ItemUseEffect } from './itemUseEffect.entity';

@Entity('avatarpartstype')
export class AvatarPartsType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => AvatarParts, (avatarparts) => avatarparts.AvatarPartsType)
  AvatarParts: AvatarParts[];

  @OneToMany(() => AvatarPreset, (avatarpreset) => avatarpreset.AvatarPartsType)
  AvatarPresets: AvatarPreset[];

  @OneToMany(() => CommerceZoneMannequin, (commercezonemannequin) => commercezonemannequin.AvatarPartsType)
  CommerceZoneMannequins: CommerceZoneMannequin[];

  @OneToMany(() => MemberAvatarInfo, (memberavatarinfo) => memberavatarinfo.AvatarPartsType)
  MemberAvatarInfos: MemberAvatarInfo[];

  @OneToMany(() => AvatarResetInfo, (avatarresetIinfo) => avatarresetIinfo.AvatarPartsType)
  AvatarResetInfos: AvatarResetInfo[];

  @OneToMany(() => ItemUseEffect, (itemuseeffect) => itemuseeffect.AvatarPartsType)
  ItemUseEffects: ItemUseEffect[];
}
