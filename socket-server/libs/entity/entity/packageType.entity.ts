import { Column, Entity, OneToMany } from 'typeorm';
import { Item } from './item.entity';

@Entity('packagetype')
export class PackageType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => Item, (item) => item.PackageType)
  Items: Item[];
}
