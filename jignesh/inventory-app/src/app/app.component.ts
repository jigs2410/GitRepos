import { Component } from '@angular/core';
import {ProductListComponent} from './product-list/product-List.component';

import {Product} from './shared/product';



@Component({
  moduleId: module.id,
  selector: 'app-inventory',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives :[ProductListComponent]

})
export class InventoryAppComponent {
  products :Product[];

  constructor (){
    this.products =[
                    new Product ('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg',['Men', 'Accessories', 'Hats'],29.99),
                    new Product('NEATOJACKET', 'Blue Jacket','/resources/images/products/blue-jacket.jpg',['Women', 'Apparel', 'Jackets & Vests'],238.99),
                    new Product('NICEHAT', 'A Nice Black Hat','/resources/images/products/black-hat.jpg',['Men', 'Accessories', 'Hats'],29.99)
                   ];
  }

productWasSelected(product: Product): void {
  console.log('Product clicked: ', product);
}

}
