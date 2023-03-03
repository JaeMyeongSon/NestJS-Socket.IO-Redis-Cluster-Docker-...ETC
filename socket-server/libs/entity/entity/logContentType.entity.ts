import { Column, Entity, OneToMany } from 'typeorm';
import { AdminLog } from './adminLog.entity';

@Entity('logcontenttype')
export class LogContentType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => AdminLog, (adminlog) => adminlog.LogContentType)
  AdminLogs: AdminLog[];
}
