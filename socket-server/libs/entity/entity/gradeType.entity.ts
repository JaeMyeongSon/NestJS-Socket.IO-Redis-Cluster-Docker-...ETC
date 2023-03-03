import { Column, Entity, OneToMany } from 'typeorm';
import { Item } from './item.entity';

@Entity('gradetype')
export class GradeType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => Item, (item) => item.GradeType)
  Items: Item[];
}
