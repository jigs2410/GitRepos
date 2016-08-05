import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { InventoryAppComponent, environment } from './app/';
import {Product} from './app/shared/product';

//import 'vendor/jquery/dist/jquery.js';
//import 'vendor/semantic-ui-css/semnatic.js';


import 'jquery/jquery.js';
import 'semantic-ui-css/semantic.js';


if (environment.production) {
  enableProdMode();
}

bootstrap(InventoryAppComponent);

