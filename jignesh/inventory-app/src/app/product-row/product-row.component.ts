import { Component, OnInit } from '@angular/core';

import {ProductImageComponent} from '../product-image/product-image.component';
import {ProductDepartmentComponent} from '../product-department/product-department.component';
import {PriceDisplayComponent} from '../price-display/price-display.component';
import {Product} from '../shared/product';

@Component({
  moduleId: module.id,
  selector: 'app-product-row',
  templateUrl: 'product-row.component.html',
  styleUrls: ['product-row.component.css'],
  directives : [PriceDisplayComponent,ProductDepartmentComponent,ProductImageComponent]
})
export class ProductRowComponent implements OnInit {
  product:Product;

  constructor() {}

  ngOnInit() {
  }

}
