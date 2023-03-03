import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ItemType } from './itemType.entity';

@Entity('inventorycapacity')
export class InventoryCapacity {
  @Column('int', { primary: true, name: 'itemType' })
  itemType: number;

  @Column('int', { name: 'capacity' })
  capacity: number;

  @OneToOne(() => ItemType, (itemtype) => itemtype.InventoryCapacity, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemType', referencedColumnName: 'type' }])
  ItemType: ItemType;
}
