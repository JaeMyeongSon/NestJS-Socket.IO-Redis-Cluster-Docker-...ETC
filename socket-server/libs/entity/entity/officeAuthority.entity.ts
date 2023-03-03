import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { OfficeModeType } from './officeModeType.entity';
import { OfficePermissionType } from './officePermissionType.entity';

@Index('permissionType', ['permissionType'], {})
@Entity('officeauthority')
export class OfficeAuthority {
  @Column('int', { primary: true, name: 'modeType' })
  modeType: number;

  @Column('int', { primary: true, name: 'permissionType' })
  permissionType: number;

  @Column('int', { name: 'chatLock' })
  chatLock: number;

  @Column('int', { name: 'voiceLock' })
  voiceLock: number;

  @Column('int', { name: 'videoChatLock' })
  videoChatLock: number;

  @Column('int', { name: 'webSharePermission' })
  webSharePermission: number;

  @Column('int', { name: 'kick' })
  kick: number;

  @Column('int', { name: 'selectHost' })
  selectHost: number;

  @Column('int', { name: 'selectSubHost' })
  selectSubHost: number;

  @Column('int', { name: 'selectGuest' })
  selectGuest: number;

  @Column('int', { name: 'selectAnnouncer' })
  selectAnnouncer: number;

  @Column('int', { name: 'selectListener' })
  selectListener: number;

  @Column('int', { name: 'selectObserver' })
  selectObserver: number;

  @Column('int', { name: 'changeRoomInfo' })
  changeRoomInfo: number;

  @Column('int', { name: 'closeRoom' })
  closeRoom: number;

  @ManyToOne(() => OfficeModeType, (officemodetype) => officemodetype.OfficeAuthorities, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'modeType', referencedColumnName: 'type' }])
  OfficeModeType: OfficeModeType;

  @ManyToOne(() => OfficePermissionType, (officepermissiontype) => officepermissiontype.OfficeAuthorities, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'permissionType', referencedColumnName: 'type' }])
  OfficePermissionType: OfficePermissionType;
}
