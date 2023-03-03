import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { MemberOfficeReservationInfo } from './memberOfficeReservationInfo.entity';
import { Localization } from './localization.entity';

@Index('name', ['name'], {})
@Entity('officeAlarmType')
export class OfficeAlarmType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @OneToMany(
    () => MemberOfficeReservationInfo,
    (memberOfficeReservationInfo) => memberOfficeReservationInfo.OfficeAlarmType,
  )
  MemberOfficeReservationInfos: MemberOfficeReservationInfo[];

  @ManyToOne(() => Localization, (localization) => localization.OfficeAlarmTypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'name', referencedColumnName: 'id' }])
  LocalizationName: Localization;
}
