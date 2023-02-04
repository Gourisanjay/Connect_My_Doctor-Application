import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  constructor(private http:HttpClient) { }
  postAppointment(data:any){
    return this.http.post<any>("https://prickly-knickers-boa.cyclic.app/Orders", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getAppointment( ){
    return this.http.get<any>("https://prickly-knickers-boa.cyclic.app/Orders",)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateAppointment(data:any,id:number){
    return this.http.put<any>("https://prickly-knickers-boa.cyclic.app/Orders"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteAppointment(id:number){
    return this.http.delete<any>("https://prickly-knickers-boa.cyclic.app/Orders"+id )
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  

  // call the repository to get,post and put the data
}

