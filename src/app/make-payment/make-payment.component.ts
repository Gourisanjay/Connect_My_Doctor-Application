import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, MaxLengthValidator, Validators} from '@angular/forms';
import { PaymentapiService } from '../services/paymentapi.service';
import { PaymentModel } from '../models/make-payment';
@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  
  formValue !: FormGroup;
  submitted:boolean = false;

  paymentModelObj:PaymentModel=new PaymentModel();
  constructor(private formbuilder:FormBuilder, 
    private api:PaymentapiService){ }
    ngOnInit(): void {
      this.formValue=this.formbuilder.group({
        cardNumber:new FormControl('',[Validators.required]),
        nameOnCard:new FormControl('',[Validators.required]),
        expYear:new FormControl('',[Validators.required]),
        cvv:new FormControl('',[Validators.required]),
        
      })
    }
    
    postPaymentDetails(){
      this.submitted= true;
      console.log("the entered form values",this.formValue.value);

      this.paymentModelObj.cardNumber=this.formValue.value.cardNumber;
      this.paymentModelObj.nameOnCard=this.formValue.value.nameOnCard;
      this.paymentModelObj.expYear=this.formValue.value.expYear;
      this.paymentModelObj.cvv=this.formValue.value.cvv;
      this.api.postPayment(this.paymentModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("payment Added Successfully")
        this.formValue.reset();
    },
    err=>{
      alert("something went wrong")
    })
   }
   onRest(){
    this.submitted = false;
    this.formValue.reset();
 }
   get h(){
    return this.formValue.controls;
  }
}
