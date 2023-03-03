import { Column, Entity, OneToMany } from 'typeorm';
import { VideoPlayInfo } from './videoPlayInfo.entity';

@Entity('enabledtype')
export class EnabledType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => VideoPlayInfo, (videoplayinfo) => videoplayinfo.EnabledType)
  VideoPlayInfos: VideoPlayInfo[];
}
