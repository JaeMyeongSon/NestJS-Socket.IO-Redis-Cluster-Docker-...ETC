import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { OfficeModeType } from './officeModeType.entity';
import { Localization } from './localization.entity';

@Index('modeType', ['modeType'], {})
@Index('description', ['description'], {})
@Index('spacename', ['spaceName'], {})
@Entity('officeSpaceInfo')
export class OfficeSpaceInfo {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'modeType' })
  modeType: number;

  @Column('varchar', { name: 'description', length: 64 })
  description: string;

  @Column('varchar', { name: 'spaceName', length: 64 })
  spaceName: string;

  @Column('varchar', { name: 'thumbnail', nullable: true, length: 64 })
  thumbnail: string | null;

  @Column('varchar', { name: 'sceneName', nullable: true, length: 64 })
  sceneName: string | null;

  @Column('int', { name: 'defaultCapacity' })
  defaultCapacity: number;

  @Column('int', { name: 'minCapacity' })
  minCapacity: number;

  @Column('int', { name: 'maxCapacity' })
  maxCapacity: number;

  @Column('int', { name: 'maxObserver' })
  maxObserver: number;

  @Column('int', { name: 'sitCapacity' })
  sitCapacity: number;

  @ManyToOne(() => OfficeModeType, (officemodetype) => officemodetype.OfficeSpaceInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'modeType', referencedColumnName: 'type' }])
  OfficeModeType: OfficeModeType;

  @ManyToOne(() => Localization, (localization) => localization.OfficeSpaceInfoDescs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'description', referencedColumnName: 'id' }])
  LocalizationDesc: Localization;

  @ManyToOne(() => Localization, (localization) => localization.OfficeSpaceInfoNames, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'spaceName', referencedColumnName: 'id' }])
  LocalizationName: Localization;
}
