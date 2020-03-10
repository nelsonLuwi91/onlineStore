import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
// import { CartDetailsComponent } from './cart-details/cart-details.component';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { CartSummaryComponent } from './cart-summary/cart-summary.component';
// import { AdminModule } from './Admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    // CartDetailsComponent,
    // CheckoutComponent,
    // CartSummaryComponent,
    // StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    // AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
