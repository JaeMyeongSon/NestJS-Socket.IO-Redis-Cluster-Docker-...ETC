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
import { Popuptype } from './popupType.entity';

@Index('adminId', ['adminId'], {})
@Index('popupType', ['popupType'], {})
@Entity('popupinfo')
export class PopupInfo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'adminId' })
  adminId: number;

  @Column('varchar', { name: 'subject', length: 64 })
  subject: string;

  @Column('int', { name: 'popupType' })
  popupType: number;

  @Column('varchar', { name: 'imageName', nullable: true, length: 256 })
  imageName: string | null;

  @Column('varchar', { name: 'linkUrl', nullable: true, length: 256 })
  linkUrl: string | null;

  @Column('int', { name: 'isAlways' })
  isAlways: number;

  @Column('datetime', { name: 'startedAt' })
  startedAt: Date;

  @Column('datetime', { name: 'endedAt' })
  endedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.popupInfos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'adminId', referencedColumnName: 'id' }])
  Admin: User;

  @ManyToOne(() => Popuptype, (popuptype) => popuptype.PopupInfos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'popupType', referencedColumnName: 'type' }])
  Popuptype: Popuptype;
}
