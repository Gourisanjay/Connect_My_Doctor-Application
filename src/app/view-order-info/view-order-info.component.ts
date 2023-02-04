import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { OrderapiService } from '../services/orderapi.service';
import { OrderModel } from '../models/order';
@Component({
  selector: 'app-view-order-info',
  templateUrl: './view-order-info.component.html',
  styleUrls: ['./view-order-info.component.css']
})
export class ViewOrderInfoComponent implements OnInit  {
  formValue !: FormGroup;
  orderModelObj:OrderModel=new OrderModel();
  orderData!:any;
  constructor(private formbuilder:FormBuilder, 
     private api:OrderapiService){ }
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      orderNo:[''],
      contactName:[''],
      orderDate:[''],
      itemsOrdered:[''],
      totalOrder:[''],
      
      
    })
    this.getAllOrder();
  }
  postOrderDetails(){
    this.orderModelObj.orderNo=this.formValue.value.orderNo
    this.orderModelObj.contactName=this.formValue.value.contactName;
    this.orderModelObj.orderDate=this.formValue.value.orderDate;
    this.orderModelObj.itemsOrdered=this.formValue.value.itemsOrdered;
    this.orderModelObj.totalOrder=this.formValue.value.totalOrder;
    this.orderModelObj.totalOrder=this.formValue.value.taxTotal;
    this.orderModelObj.totalOrder=this.formValue.value.grandTotal;
    
    this.api.postAppointment(this.orderModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Order Added Successfully")
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllOrder();
    },
    err=>{
      alert("something went wrong")
    })
   }
   getAllOrder(){
    this.api.getAppointment()
    .subscribe(res=>{
      this.orderData=res;
    })
   }
}
