import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';
import { VoteInfo } from './voteInfo.entity';
import { VoteInfoExample } from './voteInfoExample.entity';

@Index('voteId', ['voteId'], {})
@Index('voteId_num', ['voteId', 'num'], {})
@Entity('membervoteinfo')
export class MemberVoteInfo {
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @Column('int', { primary: true, name: 'voteId' })
  voteId: number;

  @Column('int', { primary: true, name: 'num' })
  num: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Member, (member) => member.MemberVoteInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @ManyToOne(() => VoteInfoExample, (voteinfo) => voteinfo.MemberVoteInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([
    { name: 'voteId', referencedColumnName: 'voteId' },
    { name: 'num', referencedColumnName: 'num' },
  ])
  VoteInfoExample: VoteInfoExample;
}
