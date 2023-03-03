import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Member } from './member.entity';
import { News } from './news.entity';

@Index('newsId', ['newsId'], {})
@Entity('newsviews')
export class NewsViews {
  @Column('varchar', { primary: true, name: 'memberId', length: 100 })
  memberId: string;

  @Column('int', { primary: true, name: 'newsId' })
  newsId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Member, (member) => member.NewsViews, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'memberId', referencedColumnName: 'memberId' }])
  Member: Member;

  @ManyToOne(() => News, (news) => news.NewsViews, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'newsId', referencedColumnName: 'id' }])
  News: News;
}
