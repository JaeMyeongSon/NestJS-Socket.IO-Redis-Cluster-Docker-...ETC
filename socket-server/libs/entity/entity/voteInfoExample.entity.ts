import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';
import { VoteInfo } from './voteInfo.entity';
import { MemberVoteInfo } from './memberVoteInfo.entity';

@Entity('voteinfoexample')
export class VoteInfoExample {
  @Column('int', { primary: true, name: 'voteId' })
  voteId: number;

  @Column('int', { primary: true, name: 'num' })
  num: number;

  @Column('varchar', { name: 'contents', length: 128 })
  contents: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => VoteInfo, (voteinfo) => voteinfo.VoteInfoExamples, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'voteId', referencedColumnName: 'id' }])
  VoteInfo: VoteInfo;

  @OneToMany(() => MemberVoteInfo, (membervoteinfo) => membervoteinfo.VoteInfoExample)
  MemberVoteInfos: MemberVoteInfo[];
}
