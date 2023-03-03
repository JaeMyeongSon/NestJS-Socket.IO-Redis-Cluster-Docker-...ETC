import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';

@Entity('infinitecoderank')
export class InfiniteCodeRank {
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @Column('float', { name: 'userScore', nullable: true, precision: 12 })
  userScore: number | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Member, (member) => member.InfiniteCodeRank, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;
}
