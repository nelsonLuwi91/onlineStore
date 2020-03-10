import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../../Model/model.module';
import { RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { CheckoutComponent } from '../checkout/checkout.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ModelModule,
    RouterModule
  ],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
  exports: [
    StoreComponent,
    CartDetailsComponent,
    CheckoutComponent
  ]
})
export class StoreModule {}
