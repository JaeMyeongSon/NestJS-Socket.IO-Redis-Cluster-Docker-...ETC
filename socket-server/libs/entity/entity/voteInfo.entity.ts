import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MemberVoteInfo } from './memberVoteInfo.entity';
import { User } from './user.entity';
import { VoteDivType } from './voteDivType.entity';
import { VoteResType } from './voteResType.entity';
import { VoteResultType } from './voteResultType.entity';
import { BooleanType } from './booleanType.entity';
import { VoteInfoExample } from './voteInfoExample.entity';
import { VoteAlterResType } from './voteAlterResType.entity';

@Index('divType', ['divType'], {})
@Index('resType', ['resType'], {})
@Index('resultType', ['resultType'], {})
@Index('isExposingResult', ['isExposingResult'], {})
@Index('isEnabledEdit', ['isEnabledEdit'], {})
@Index('adminId', ['adminId'], {})
@Entity('voteinfo')
export class VoteInfo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @Column('varchar', { name: 'question', length: 256 })
  question: string;

  @Column('varchar', { name: 'imageName', nullable: true, length: 128 })
  imageName: string | null;

  @Column('int', { name: 'divType' })
  divType: number;

  @Column('int', { name: 'resType' })
  resType: number;

  @Column('int', { name: 'alterResType' })
  alterResType: number;

  @Column('int', { name: 'resultType' })
  resultType: number;

  @Column('int', { name: 'isExposingResult', default: () => "'0'" })
  isExposingResult: number;

  @Column('int', { name: 'isEnabledEdit', default: () => "'0'" })
  isEnabledEdit: number;

  @Column('datetime', { name: 'startedAt' })
  startedAt: Date;

  @Column('datetime', { name: 'endedAt' })
  endedAt: Date;

  @Column('datetime', { name: 'resultEndedAt' })
  resultEndedAt: Date;

  @Column('int', { name: 'adminId' })
  adminId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date | null;

  @ManyToOne(() => VoteDivType, (votedivtype) => votedivtype.VoteInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'divType', referencedColumnName: 'type' }])
  VoteDivType: VoteDivType;

  @ManyToOne(() => VoteAlterResType, (voteAlterRestype) => voteAlterRestype.VoteInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'alterResType', referencedColumnName: 'type' }])
  VoteAlterResType: VoteAlterResType;

  @ManyToOne(() => VoteResType, (voterestype) => voterestype.VoteInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'resType', referencedColumnName: 'type' }])
  VoteResType: VoteResType;

  @ManyToOne(() => VoteResultType, (voteresulttype) => voteresulttype.VoteInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'resultType', referencedColumnName: 'type' }])
  VoteResultType: VoteResultType;

  @ManyToOne(() => BooleanType, (booleantype) => booleantype.IsExposingResultVoteInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'isExposingResult', referencedColumnName: 'type' }])
  isExposingResultBool: BooleanType;

  @ManyToOne(() => BooleanType, (booleantype) => booleantype.IsEnabledEditVoteInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'isEnabledEdit', referencedColumnName: 'type' }])
  isEnabledEditBool: BooleanType;

  @ManyToOne(() => User, (user) => user.VoteInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'adminId', referencedColumnName: 'id' }])
  Admin: User;

  @OneToMany(() => VoteInfoExample, (voteinfoexample) => voteinfoexample.VoteInfo)
  VoteInfoExamples: VoteInfoExample[];
}
