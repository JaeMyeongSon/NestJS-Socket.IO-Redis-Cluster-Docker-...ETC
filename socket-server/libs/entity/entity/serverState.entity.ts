import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Gateway } from './gateway.entity';
import { ApiProperty } from '@nestjs/swagger';

@Index('state', ['state'], { unique: true })
@Entity('serverstate')
export class ServerState {
  @Column('int', { primary: true, name: 'state' })
  state: number;

  @ApiProperty({
    example: '활성',
    description: '서버 상태',
  })
  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => Gateway, (gateway) => gateway.stateType)
  gateways: Gateway[];
}
