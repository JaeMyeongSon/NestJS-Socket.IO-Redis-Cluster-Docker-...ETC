import { Column, Entity } from 'typeorm';

@Entity('quizlevel')
export class QuizLevel {
  @Column('int', { primary: true, name: 'level' })
  level: number;

  @Column('int', { name: 'waitTime' })
  waitTime: number;

  @Column('int', { name: 'playTime' })
  playTime: number;
}
