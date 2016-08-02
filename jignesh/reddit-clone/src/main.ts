import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import 'jquery/jquery.js';
import 'semantic-ui-css/semantic.js'


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);

