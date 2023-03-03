import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { QuizTimeType } from './quizTimeType.entity';

@Index('timeType', ['timeType'], {})
@Entity('quizroundtime')
export class QuizRoundTime {
  @Column('int', { primary: true, name: 'round' })
  round: number;

  @Column('int', { name: 'timeType' })
  timeType: number;

  @ManyToOne(() => QuizTimeType, (quiztimetype) => quiztimetype.QuizRoundTimes, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'timeType', referencedColumnName: 'type' }])
  QuizTimeType: QuizTimeType;
}
