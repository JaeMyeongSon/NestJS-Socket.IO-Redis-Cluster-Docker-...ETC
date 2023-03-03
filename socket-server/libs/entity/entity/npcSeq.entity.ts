import { Column, Entity, OneToMany } from 'typeorm';
import { Npc } from './npc.entity';
import { NpcSeqAct } from './npcSeqAct.entity';

@Entity('npcseq')
export class NpcSeq {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'textId' })
  textId: number;

  @Column('varchar', { name: 'aniName', length: 256 })
  aniName: string;

  @OneToMany(() => Npc, (npc) => npc.NpcSeq)
  Npcs: Npc[];

  @OneToMany(() => NpcSeqAct, (npcseqact) => npcseqact.SeqIdAct1)
  NpcSeqActs1: NpcSeqAct[];

  @OneToMany(() => NpcSeqAct, (npcseqact) => npcseqact.SeqIdAct2)
  NpcSeqActs2: NpcSeqAct[];

  @OneToMany(() => NpcSeqAct, (npcseqact) => npcseqact.SeqIdAct3)
  NpcSeqActs3: NpcSeqAct[];
}
