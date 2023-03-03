import { ApiProperty } from '@nestjs/swagger';
import { MemberReportInfo } from '@lib/entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ReportType } from './reportType.entity';
import { ReportReasonType } from './reportReasonType.entity';

@Index('reasonType', ['reasonType'], {})
@Entity('reportCategory')
export class ReportCategory {
  @ApiProperty({
    example: 1,
    description: '신고 유형 타입',
  })
  @Column('int', { primary: true, name: 'reportType' })
  reportType: number;

  @ApiProperty({
    example: 1,
    description: '신고 상세 사유 타입',
  })
  @Column('int', { primary: true, name: 'reasonType' })
  reasonType: number;

  @ManyToOne(() => ReportType, (reporttype) => reporttype.ReportCategorise, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'reportType', referencedColumnName: 'type' }])
  ReportType: ReportType;

  @ManyToOne(() => ReportReasonType, (reportreasontype) => reportreasontype.ReportCategorise, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'reasonType', referencedColumnName: 'type' }])
  ReportReasonType: ReportReasonType;

  @OneToMany(() => MemberReportInfo, (memberreportinfo) => memberreportinfo.ReportCategory)
  MemberReportInfos: MemberReportInfo[];
}
