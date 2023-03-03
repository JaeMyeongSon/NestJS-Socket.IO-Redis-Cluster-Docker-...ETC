import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { QuizAnswerType } from './quizAnswerType.entity';

@Index('answerType', ['answerType'], {})
@Entity('quizquestionanswer')
export class QuizQuestionAnswer {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'questionId' })
  questionId: number;

  @Column('int', { name: 'answerType' })
  answerType: number;

  @ManyToOne(() => QuizAnswerType, (quizanswertype) => quizanswertype.QuizQuestionAnswers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'answerType', referencedColumnName: 'type' }])
  QuizAnswerType: QuizAnswerType;
}
