import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewOrderInfoComponent } from './view-order-info/view-order-info.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewOrderInfoComponent,
    MakePaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
