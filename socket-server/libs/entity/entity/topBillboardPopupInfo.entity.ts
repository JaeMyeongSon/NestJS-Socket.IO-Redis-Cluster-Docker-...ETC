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
import { User } from './user.entity';

@Index('adminId', ['adminId'], {})
@Entity('topbillboardpopupinfo')
export class TopBillboardPopupInfo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'adminId' })
  adminId: number;

  @Column('varchar', { name: 'content', length: 64 })
  content: string;

  @Column('int', { name: 'isImmediate' })
  isImmediate: number;

  @Column('datetime', { name: 'startedAt' })
  startedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.TopBillboardPopupInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'adminId', referencedColumnName: 'id' }])
  Admin: User;
}
