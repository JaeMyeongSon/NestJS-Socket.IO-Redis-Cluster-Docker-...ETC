import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { MannequinModelType } from './mannequinModelType.entity';
import { AvatarPartsStateType } from './avatarPartsStateType.entity';

@Index('stateType', ['stateType'], {})
@Entity('mannequinpurchasestate')
export class MannequinPurchaseState {
  @Column('int', { primary: true, name: 'modelType' })
  modelType: number;

  @Column('int', { name: 'stateType' })
  stateType: number;

  @OneToOne(() => MannequinModelType, (mannequinmodeltype) => mannequinmodeltype.MannequinPurchaseState, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'modelType', referencedColumnName: 'type' }])
  MannequinModelType: MannequinModelType;

  @ManyToOne(() => AvatarPartsStateType, (avatarpartsstatetype) => avatarpartsstatetype.MannequinPurchaseStates, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'stateType', referencedColumnName: 'type' }])
  AvatarPartsStateType: AvatarPartsStateType;
}
