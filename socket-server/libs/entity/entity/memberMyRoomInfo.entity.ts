import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MemberInteriorItemInven } from './memberInteriorItemInven.entity';
import { LayerType } from './layerType.entity';
import { ApiProperty } from '@nestjs/swagger';

@Index('itemId', ['itemId'], {})
@Index('memberId', ['memberId'], {})
@Index('memberId_itemId', ['memberId', 'itemId'], {})
@Index('layerType', ['layerType'], {})
@Entity('membermyroominfo')
export class MemberMyRoomInfo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'memberId', length: 100 })
  memberId: string;

  @ApiProperty({
    example: 110001,
    description: '아이템 아이디',
    required: true,
  })
  @Column('int', { name: 'itemId' })
  itemId: number;

  @ApiProperty({
    example: 1,
    description: '레이어 타입',
    required: true,
  })
  @Column('int', { name: 'layerType' })
  layerType: number;

  @ApiProperty({
    example: 12,
    description: 'x 좌표',
    required: true,
  })
  @Column('int', { name: 'x' })
  x: number;

  @ApiProperty({
    example: 8,
    description: 'y 좌표',
    required: true,
  })
  @Column('int', { name: 'y' })
  y: number;

  @ApiProperty({
    example: 72,
    description: '회전',
    required: true,
  })
  @Column('int', { name: 'rotation' })
  rotation: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => MemberInteriorItemInven, (memberinterioriteminven) => memberinterioriteminven.MemberMyRoomInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([
    { name: 'memberId', referencedColumnName: 'memberId' },
    { name: 'itemId', referencedColumnName: 'itemId' },
  ])
  MemberInteriorItemInven: MemberInteriorItemInven;

  @ManyToOne(() => LayerType, (layertype) => layertype.MemberMyRoomInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'layerType', referencedColumnName: 'type' }])
  LayerType: LayerType;
}
