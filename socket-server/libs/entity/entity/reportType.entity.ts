import { Column, Entity, OneToMany } from 'typeorm';
import { ReportCategory } from './reportCategory.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('reporttype')
export class ReportType {
  @ApiProperty({
    example: 1,
    description: '신고 유형 타입',
  })
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @ApiProperty({
    example: '버그 악용',
    description: '이름',
  })
  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => ReportCategory, (reportcategory) => reportcategory.ReportType)
  ReportCategorise: ReportCategory[];
}
