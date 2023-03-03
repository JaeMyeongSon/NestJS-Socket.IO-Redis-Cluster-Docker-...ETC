import { Column, Entity, OneToMany } from 'typeorm';
import { OfficeExposure } from './officeExposure.entity';

@Entity('officeExposureType')
export class OfficeExposureType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => OfficeExposure, (officeexposure) => officeexposure.OfficeExposureType)
  OfficeExposures: OfficeExposure[];
}
