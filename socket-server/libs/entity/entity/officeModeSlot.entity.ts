import { OfficePermissionType } from './officePermissionType.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { OfficeModeType } from './officeModeType.entity';

@Index('permissionType', ['permissionType'], {})
@Entity('officeModeSlot')
export class OfficeModeSlot {
  @Column('int', { primary: true, name: 'modeType' })
  modeType: number;

  @Column('int', { primary: true, name: 'permissionType' })
  permissionType: number;

  @ManyToOne(() => OfficeModeType, (officemodetype) => officemodetype.OfficeModeSlots, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'modeType', referencedColumnName: 'type' }])
  OfficeModeType: OfficeModeType;

  @ManyToOne(() => OfficePermissionType, (officepermissiontype) => officepermissiontype.OfficeModeSlots, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'permissionType', referencedColumnName: 'type' }])
  OfficePermissionType: OfficePermissionType;
}
