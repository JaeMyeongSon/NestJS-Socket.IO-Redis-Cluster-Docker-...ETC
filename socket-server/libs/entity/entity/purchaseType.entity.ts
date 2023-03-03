import { BusinessCardTemplate } from './businessCardTemplate.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Item } from './item.entity';
import { OfficeProductItem } from './officeProductItem.entity';

@Entity('purchasetype')
export class PurchaseType {
  @Column('int', { primary: true, name: 'type' })
  type: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @OneToMany(() => Item, (item) => item.PurchaseType)
  Items: Item[];

  @OneToMany(() => BusinessCardTemplate, (businesscardtemplate) => businesscardtemplate.PurchaseType)
  BusinessCardTemplates: BusinessCardTemplate[];

  @OneToMany(() => OfficeProductItem, (officeproductitem) => officeproductitem.PurchaseType)
  OfficeProductItems: OfficeProductItem[];
}
