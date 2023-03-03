import { Column, Entity, OneToMany } from 'typeorm';
import { QuizQuestionAnswer } from './quizQuestionAnswer.entity';

@Entity('quizanswertype')
export class QuizAnswerType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => QuizQuestionAnswer, (quizquestionanswer) => quizquestionanswer.QuizAnswerType)
  QuizQuestionAnswers: QuizQuestionAnswer[];
}
