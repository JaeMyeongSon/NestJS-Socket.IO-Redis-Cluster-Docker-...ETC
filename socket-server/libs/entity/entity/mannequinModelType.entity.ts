import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { CommerceZoneMannequin } from './commerceZoneMannequin.entity';
import { MannequinPurchaseState } from './mannequinPurchaseState.entity';

@Entity('mannequinmodeltype')
export class MannequinModelType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => CommerceZoneMannequin, (commercezonemannequin) => commercezonemannequin.MannequinModelType)
  CommerceZoneMannequins: CommerceZoneMannequin[];

  @OneToOne(() => MannequinPurchaseState, (mannequinpurchasestate) => mannequinpurchasestate.MannequinModelType)
  MannequinPurchaseState: MannequinPurchaseState;
}
