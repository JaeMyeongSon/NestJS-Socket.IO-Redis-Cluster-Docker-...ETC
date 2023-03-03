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
import { NewsType } from './newsType.entity';
import { User } from './user.entity';
import { NewsViews } from './newsViews.entity';

@Index('newsType', ['newsType'], {})
@Index('adminId', ['adminId'], {})
@Entity('news')
export class News {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'subject', length: 100 })
  subject: string;

  @Column('text', { name: 'content' })
  content: string;

  @Column('text', { name: 'taglessContent' })
  taglessContent: string;

  @Column('int', { name: 'newsType' })
  newsType: number;

  @Column('int', { name: 'adminId' })
  adminId: number;

  @Column('int', { name: 'isTopFix', default: () => "'0'" })
  isTopFix: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @ManyToOne(() => NewsType, (newstype) => newstype.News, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'newsType', referencedColumnName: 'type' }])
  NewsType: NewsType;

  @ManyToOne(() => User, (user) => user.news, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'adminId', referencedColumnName: 'id' }])
  Admin: User;

  @OneToMany(() => NewsViews, (newsviews) => newsviews.News)
  NewsViews: NewsViews[];
}
