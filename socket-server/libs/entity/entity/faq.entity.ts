import { Column, Entity } from 'typeorm';

@Entity('faq')
export class Faq {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('text', { name: 'question' })
  question: string;

  @Column('text', { name: 'answer' })
  answer: string;
}
