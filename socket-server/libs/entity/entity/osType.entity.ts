import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Gateway } from './gateway.entity';
import { ApiProperty } from '@nestjs/swagger';

@Index('type', ['type'], { unique: true })
@Entity('ostype')
export class OsType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @ApiProperty({
    example: 'Android',
    description: 'OS 종류',
  })
  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @Column('varchar', { name: 'storeUrl', length: 100 })
  storeUrl: string;

  @OneToMany(() => Gateway, (gateway) => gateway.OsType)
  gateways: Gateway[];
}
