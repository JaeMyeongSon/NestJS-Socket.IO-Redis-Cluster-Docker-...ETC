import { Column, CreateDateColumn, Entity } from 'typeorm';

@Entity('officeRoomCodeLog')
export class OfficeRoomCodeLog {
  @Column('varchar', { primary: true, name: 'roomCode', length: 20 })
  roomCode: string;

  @CreateDateColumn()
  createdAt: Date;
}
