import { Column, Entity } from 'typeorm';

@Entity('departmenttype')
export class DepartmentType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;
}
