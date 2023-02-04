import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakePaymentComponent } from './make-payment/make-payment.component';

import { ViewOrderInfoComponent } from './view-order-info/view-order-info.component';
const routes: Routes = [
  {path:'',component:ViewOrderInfoComponent},
   {path:'makepayment',component:MakePaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
