import { ReportCategory } from './reportCategory.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { InventoryCapacity } from './inventoryCapacity.entity';
import { Item } from './item.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('reportReasonType')
export class ReportReasonType {
  @ApiProperty({
    example: 1,
    description: '신고 상세 사유 타입',
  })
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @ApiProperty({
    example: '비속어 · 음란성 내포',
    description: '이름',
  })
  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => ReportCategory, (reportcategory) => reportcategory.ReportReasonType)
  ReportCategorise: ReportCategory[];
}
