import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { OfficeExposureType } from './officeExposureType.entity';
import { OfficeModeType } from './officeModeType.entity';

@Index('modeType', ['modeType'], {})
@Entity('officeExposure')
export class OfficeExposure {
  @Column('int', { primary: true, name: 'exposureType' })
  exposureType: number;

  @Column('int', { primary: true, name: 'modeType' })
  modeType: number;

  @ManyToOne(() => OfficeExposureType, (officeexposuretype) => officeexposuretype.OfficeExposures, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'exposureType', referencedColumnName: 'type' }])
  OfficeExposureType: OfficeExposureType;

  @ManyToOne(() => OfficeModeType, (officemodetype) => officemodetype.OfficeExposures, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'modeType', referencedColumnName: 'type' }])
  OfficeModeType: OfficeModeType;
}
