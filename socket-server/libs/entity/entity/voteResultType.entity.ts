import { Column, Entity, OneToMany } from 'typeorm';
import { VoteInfo } from './voteInfo.entity';

@Entity('voteresulttype')
export class VoteResultType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => VoteInfo, (voteinfo) => voteinfo.VoteResultType)
  VoteInfos: VoteInfo[];
}
