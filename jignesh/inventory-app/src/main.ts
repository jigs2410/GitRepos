import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { InventoryAppComponent, environment } from './app/';
import {Product} from './app/shared/product';

if (environment.production) {
  enableProdMode();
}

bootstrap(InventoryAppComponent);

