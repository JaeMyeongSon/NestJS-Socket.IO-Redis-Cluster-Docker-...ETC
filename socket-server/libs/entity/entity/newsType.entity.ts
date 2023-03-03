import { Column, Entity, OneToMany } from 'typeorm';
import { News } from './news.entity';

@Entity('newstype')
export class NewsType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => News, (news) => news.NewsType)
  News: News[];
}
