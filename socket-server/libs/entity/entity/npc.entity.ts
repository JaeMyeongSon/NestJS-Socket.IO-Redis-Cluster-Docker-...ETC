import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { NpcSeq } from './npcSeq.entity';
import { NpcMapPositionType } from './npcMapPositionType.entity';

@Index('seqId', ['seqId'], {})
@Index('mapPosType', ['mapPosType'], {})
@Entity('npc')
export class Npc {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'seqId' })
  seqId: number;

  @Column('int', { name: 'mapPosType' })
  mapPosType: number;

  @Column('int', { name: 'nameId' })
  nameId: number;

  @Column('int', { name: 'xPos' })
  xPos: number;

  @Column('int', { name: 'yPos' })
  yPos: number;

  @Column('int', { name: 'zPos' })
  zPos: number;

  @Column('int', { name: 'xRot' })
  xRot: number;

  @Column('int', { name: 'yRot' })
  yRot: number;

  @Column('int', { name: 'zRot' })
  zRot: number;

  @Column('int', { name: 'scale' })
  scale: number;

  @Column('varchar', { name: 'prefab', length: 256 })
  prefab: string;

  @ManyToOne(() => NpcSeq, (npcseq) => npcseq.Npcs, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'seqId', referencedColumnName: 'id' }])
  NpcSeq: NpcSeq;

  @ManyToOne(() => NpcMapPositionType, (npcmappositiontype) => npcmappositiontype.Npcs, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'mapPosType', referencedColumnName: 'type' }])
  NpcMapPositionType: NpcMapPositionType;
}
