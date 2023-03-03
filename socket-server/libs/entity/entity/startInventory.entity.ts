import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity('startinventory')
export class StartInventory {
  @Column('int', { primary: true, name: 'itemId' })
  itemId: number;

  @Column('int', { name: 'count' })
  count: number;

  @ManyToOne(() => Item, (item) => item.StartInventorys, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'itemId', referencedColumnName: 'id' }])
  Item: Item;
}
