import { Column, Entity, OneToMany } from 'typeorm';
import { Npc } from './npc.entity';

@Entity('npcmappositiontype')
export class NpcMapPositionType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => Npc, (npc) => npc.NpcMapPositionType)
  Npcs: Npc[];
}
