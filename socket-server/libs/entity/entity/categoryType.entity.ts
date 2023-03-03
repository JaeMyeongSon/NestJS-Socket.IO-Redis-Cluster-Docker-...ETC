import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Item } from './item.entity';
import { Localization } from './localization.entity';

@Index('name', ['name'], {})
@Entity('categorytype')
export class CategoryType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @ManyToOne(() => Localization, (localization) => localization.CategoryTypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'name', referencedColumnName: 'id' }])
  LocalizationName: Localization;

  @OneToMany(() => Item, (item) => item.CategoryType)
  Items: Item[];
}
