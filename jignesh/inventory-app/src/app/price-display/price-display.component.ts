import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-price-display',
  templateUrl: 'price-display.component.html',
  styleUrls: ['price-display.component.css'],
  inputs :['price']
})
export class PriceDisplayComponent implements OnInit {
  price:number;
  constructor() {}

  ngOnInit() {
  }

}
