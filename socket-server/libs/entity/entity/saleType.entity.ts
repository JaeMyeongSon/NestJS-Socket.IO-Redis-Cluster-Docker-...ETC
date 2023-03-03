import { Column, Entity, OneToMany } from 'typeorm';
import { Item } from './item.entity';

@Entity('saletype')
export class SaleType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => Item, (item) => item.SaleType)
  Items: Item[];
}
