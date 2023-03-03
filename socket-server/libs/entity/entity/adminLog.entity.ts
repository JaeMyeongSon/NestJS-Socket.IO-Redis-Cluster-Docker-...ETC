import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LogContentType } from './logContentType.entity';
import { LogActionType } from './logActionType.entity';
import { User } from './user.entity';

@Index('contentType', ['contentType'], {})
@Index('actionType', ['actionType'], {})
@Index('adminId', ['adminId'], {})
@Entity('adminlog')
export class AdminLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'contentType' })
  contentType: number;

  @Column('int', { name: 'actionType' })
  actionType: number;

  @Column('text', { name: 'beforeData', nullable: true })
  beforeData: string | null;

  @Column('text', { name: 'afterData', nullable: true })
  afterData: string | null;

  @Column('int', { name: 'adminId' })
  adminId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => LogContentType, (logcontenttype) => logcontenttype.AdminLogs, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'contentType', referencedColumnName: 'type' }])
  LogContentType: LogContentType;

  @ManyToOne(() => LogActionType, (logactiontype) => logactiontype.AdminLogs, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'actionType', referencedColumnName: 'type' }])
  LogActionType: LogActionType;

  @ManyToOne(() => User, (user) => user.AdminLogs, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'adminId', referencedColumnName: 'id' }])
  Admin: User;
}
