import { Column, Entity, OneToMany } from 'typeorm';
import { VoteInfo } from './voteInfo.entity';

@Entity('booleantype')
export class BooleanType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('tinyint', { name: 'name', width: 1 })
  name: boolean;

  @OneToMany(() => VoteInfo, (voteinfo) => voteinfo.isExposingResultBool)
  IsExposingResultVoteInfos: VoteInfo[];

  @OneToMany(() => VoteInfo, (voteinfo) => voteinfo.isEnabledEditBool)
  IsEnabledEditVoteInfos: VoteInfo[];
}
