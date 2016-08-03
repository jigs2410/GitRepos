import { Component, OnInit, EventEmitter } from '@angular/core';

import {ProductRowComponent} from '../product-row/product-Row.component';
import {Product} from '../shared/product';


@Component({
  moduleId: module.id,
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
  directives:[ ProductRowComponent],
  inputs :['productList'],
  outputs :['onProductSelected']
})

export class ProductListComponent implements OnInit {

  productList : Product[];

  onProductSelected : EventEmitter<Product>;
 
  constructor() {
    this.onProductSelected =new EventEmitter();

  }

  ngOnInit() {
  }

  productWasSelected(product:Product):void{
    this.onProductSelected.emit(product);

  }

}
