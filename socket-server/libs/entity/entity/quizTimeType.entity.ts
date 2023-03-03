import { Column, Entity, OneToMany } from 'typeorm';
import { QuizRoundTime } from './quizRoundTime.entity';

@Entity('quiztimetype')
export class QuizTimeType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => QuizRoundTime, (quizroundtime) => quizroundtime.QuizTimeType)
  QuizRoundTimes: QuizRoundTime[];
}
