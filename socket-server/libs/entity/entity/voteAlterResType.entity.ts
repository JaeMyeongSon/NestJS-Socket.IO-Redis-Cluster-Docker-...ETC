import { Column, Entity, OneToMany } from 'typeorm';
import { VoteAlterResponse } from './voteAlterResponse.entity';
import { VoteInfo } from './voteInfo.entity';

@Entity('votealterrestype')
export class VoteAlterResType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => VoteAlterResponse, (votealterresponse) => votealterresponse.VoteAlterResType)
  VoteAlterResponses: VoteAlterResponse[];

  @OneToMany(() => VoteInfo, (voteinfo) => voteinfo.VoteAlterResType)
  VoteInfos: VoteInfo[];
}
