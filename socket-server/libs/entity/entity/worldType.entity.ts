import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { VideoScreenInfo } from './videoScreenInfo.entity';
import { AreaType } from './areaType.entity';

@Entity('worldtype')
export class WorldType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => VideoScreenInfo, (videoscreeninfo) => videoscreeninfo.WorldType)
  VideoScreenInfos: VideoScreenInfo[];

  @ManyToMany(() => AreaType, (areatype) => areatype.WorldTypes)
  @JoinTable({
    name: 'worldareainfo',
    joinColumns: [{ name: 'worldType', referencedColumnName: 'type' }],
    inverseJoinColumns: [{ name: 'areaType', referencedColumnName: 'type' }],
    schema: 'dev_arzmeta_db',
  })
  AreaTypes: AreaType[];
}
