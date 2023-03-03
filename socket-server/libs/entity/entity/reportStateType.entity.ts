import { Column, Entity, OneToMany } from 'typeorm';
import { MemberReportInfo } from './memberReportInfo.entity';

@Entity('reportStateType')
export class ReportStateType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => MemberReportInfo, (memberReportInfo) => memberReportInfo.ReportStateType)
  MemberReportInfos: MemberReportInfo[];
}
