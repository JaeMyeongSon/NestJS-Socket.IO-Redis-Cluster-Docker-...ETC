import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';
import { Gateway } from './gateway.entity';
import { ServerInfo } from './serverInfo.entity';
import { ApiProperty } from '@nestjs/swagger';

@Index('type', ['type'], { unique: true })
@Entity('servertype')
export class ServerType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @ApiProperty({
    example: 'DEV',
    description: '서버 종류',
  })
  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => Gateway, (gateway) => gateway.ServerType)
  gateways: Gateway[];

  @OneToOne(() => ServerInfo, (serverinfo) => serverinfo.ServerType)
  ServerInfo: ServerInfo;
}
