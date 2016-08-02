/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { InventoryAppComponent } from './app.component';

beforeEachProviders(() => [InventoryAppComponent]);

describe('App: InventoryApp', () => {
  it('should create the app',
      inject([InventoryAppComponent], (app: InventoryAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([InventoryAppComponent], (app: InventoryAppComponent) => {
    expect(app.title).toEqual('app works!');
  }));
});
