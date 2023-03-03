import { Column, Entity, OneToMany } from 'typeorm';
import { VoteInfo } from './voteInfo.entity';

@Entity('voterestype')
export class VoteResType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => VoteInfo, (voteinfo) => voteinfo.VoteResType)
  VoteInfos: VoteInfo[];
}
