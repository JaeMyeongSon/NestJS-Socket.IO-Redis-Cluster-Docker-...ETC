import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { ServerType } from './serverType.entity';

@Index('serverType', ['serverType'], { unique: true })
@Entity('serverinfo')
export class ServerInfo {
  @Column('int', { primary: true, name: 'serverType' })
  serverType: number;

  @Column('varchar', { name: 'accountServerUrl', length: 100 })
  accountServerUrl: string;

  @Column('varchar', { name: 'agoraServerUrl', length: 100 })
  agoraServerUrl: string;

  @Column('varchar', { name: 'contentServerUrl', length: 100 })
  contentServerUrl: string;

  @Column('varchar', { name: 'lobbyServerUrl', length: 100 })
  lobbyServerUrl: string;

  @Column('varchar', { name: 'meetingRoomServerUrl', length: 100 })
  meetingRoomServerUrl: string;

  @Column('int', { name: 'meetingRoomServerPort' })
  meetingRoomServerPort: number;

  @Column('varchar', { name: 'myRoomServerUrl', nullable: true, length: 100 })
  myRoomServerUrl: string | null;

  @Column('int', { name: 'myRoomServerPort', nullable: true })
  myRoomServerPort: number | null;

  @Column('varchar', { name: 'matchingServerUrl', length: 100 })
  matchingServerUrl: string;

  @Column('int', { name: 'matchingServerPort' })
  matchingServerPort: number;

  @Column('varchar', { name: 'OXServerUrl', length: 100 })
  oxServerUrl: string;

  @Column('int', { name: 'OXServerPort' })
  oxServerPort: number;

  @Column('varchar', { name: 'storageUrl', length: 100 })
  storageUrl: string;

  @Column('varchar', { name: 'homepageUrl', length: 100 })
  homepageUrl: string;

  @Column('varchar', { name: 'webviewUrl', length: 100 })
  webviewUrl: string;

  @Column('int', { name: 'gameServerPort' })
  gameServerPort: number;

  @OneToOne(() => ServerType, (servertype) => servertype.ServerInfo, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'serverType', referencedColumnName: 'type' }])
  ServerType: ServerType;
}
