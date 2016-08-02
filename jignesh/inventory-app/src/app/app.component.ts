import { Component } from '@angular/core';
import {ProductListComponent} from './product-list/product-List.component';
import {ProductRowComponent} from './product-row/product-Row.component';

class Product {

  constructor (
    public sku : string,
    public name : string,
    public imageUrl: string,
    public department : string[],
    public price : string
  
  ){};

}

@Component({
  moduleId: module.id,
  selector: 'app-inventory',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives :[ProductListComponent, ProductRowComponent]

})
export class InventoryAppComponent {
  product :Product;

  constructor (){
    this.product = new Product ('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg',['Men', 'Accessories', 'Hats'],'29.99');
  }

}
