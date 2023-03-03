import { Column, Entity, OneToMany } from 'typeorm';
import { MannequinPurchaseState } from './mannequinPurchaseState.entity';

@Entity('avatarpartsstatetype')
export class AvatarPartsStateType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @OneToMany(() => MannequinPurchaseState, (mannequinpurchasestate) => mannequinpurchasestate.AvatarPartsStateType)
  MannequinPurchaseStates: MannequinPurchaseState[];
}
