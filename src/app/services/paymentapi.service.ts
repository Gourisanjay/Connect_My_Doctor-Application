import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentapiService {

  constructor(private http:HttpClient) { }
  postPayment(data:any){
    return this.http.post<any>("  http://localhost:3000/addpay", data)
    .pipe(map((res:any)=>{
      return res;
    }))
}
}
