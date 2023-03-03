import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { NpcSeq } from './npcSeq.entity';

@Index('seqIdAct1', ['seqIdAct1'], {})
@Index('seqIdAct2', ['seqIdAct2'], {})
@Index('seqIdAct3', ['seqIdAct3'], {})
@Entity('npcseqact')
export class NpcSeqAct {
  @Column('int', { primary: true, name: 'seqId' })
  seqId: number;

  @Column('int', { name: 'seqIdAct1' })
  seqIdAct1: number;

  @Column('int', { name: 'seqIdAct2' })
  seqIdAct2: number;

  @Column('int', { name: 'seqIdAct3' })
  seqIdAct3: number;

  @Column('int', { name: 'seqIdText1' })
  seqIdText1: number;

  @Column('int', { name: 'seqIdText2' })
  seqIdText2: number;

  @Column('int', { name: 'seqIdText3' })
  seqIdText3: number;

  @ManyToOne(() => NpcSeq, (npcseq) => npcseq.NpcSeqActs1, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'seqIdAct1', referencedColumnName: 'id' }])
  SeqIdAct1: NpcSeq;

  @ManyToOne(() => NpcSeq, (npcseq) => npcseq.NpcSeqActs2, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'seqIdAct2', referencedColumnName: 'id' }])
  SeqIdAct2: NpcSeq;

  @ManyToOne(() => NpcSeq, (npcseq) => npcseq.NpcSeqActs3, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'seqIdAct3', referencedColumnName: 'id' }])
  SeqIdAct3: NpcSeq;
}
