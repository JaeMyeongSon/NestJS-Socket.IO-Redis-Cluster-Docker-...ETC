import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { InventoryCapacity } from './inventoryCapacity.entity';
import { Item } from './item.entity';

@Entity('itemtype')
export class ItemType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToOne(() => InventoryCapacity, (inventorycapacity) => inventorycapacity.ItemType)
  InventoryCapacity: InventoryCapacity;

  @OneToMany(() => Item, (item) => item.ItemType)
  Items: Item[];
}
