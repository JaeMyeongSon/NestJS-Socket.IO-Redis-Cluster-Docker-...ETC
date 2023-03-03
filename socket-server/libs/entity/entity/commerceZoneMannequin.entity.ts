import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { MannequinModelType } from './mannequinModelType.entity';
import { AvatarPartsType } from './avatarPartsType.entity';
import { AvatarParts } from './avatarParts.entity';
import { Item } from './item.entity';

@Index('modelType', ['modelType'], {})
@Index('partsType', ['partsType'], {})
@Entity('commercezonemannequin')
export class CommerceZoneMannequin {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'modelType' })
  modelType: number;

  @Column('int', { name: 'partsType' })
  partsType: number;

  @Column('int', { name: 'itemId' })
  itemId: number;

  @ManyToOne(() => MannequinModelType, (mannequinmodeltype) => mannequinmodeltype.CommerceZoneMannequins, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'modelType', referencedColumnName: 'type' }])
  MannequinModelType: MannequinModelType;

  @ManyToOne(() => AvatarPartsType, (avatarpartstype) => avatarpartstype.CommerceZoneMannequins, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'partsType', referencedColumnName: 'type' }])
  AvatarPartsType: AvatarPartsType;

  @ManyToOne(() => Item, (item) => item.CommerceZoneMannequins, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemId', referencedColumnName: 'id' }])
  Item: Item;
}
