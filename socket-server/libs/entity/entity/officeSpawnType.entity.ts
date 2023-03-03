import { Column, Entity, OneToMany } from 'typeorm';
import { OfficeDefaultOption } from './officeDefaultOption.entity';

@Entity('officespawntype')
export class OfficeSpawnType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => OfficeDefaultOption, (officedefaultoption) => officedefaultoption.OfficeSpawnType)
  OfficeDefaultOptions: OfficeDefaultOption[];
}
