import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  // public appointment:any;

  constructor(private http:HttpClient) { }

//Doctors
get_Doctor(){
  return this.http.get('http://localhost:3000/Doctors')
 }

 post_Doctor(data:any){
  this.http.post('http://localhost:3000/Doctors',data).subscribe(data=>{
    console.log(data)
  });
 }
 remove_Doctor(id:any){
  this.http.delete('http://localhost:3000/Doctors/'+id).subscribe()
  window.location.reload();
}



//Patients
get_patients(){

  return this.http.get('http://localhost:3000/Patients')
 }

 post_patients(data:any){
  this.http.post('http://localhost:3000/Patients',data).subscribe(data=>{
    console.log(data)
  });

 }
  remove_patients(id:any){
    this.http.delete('http://localhost:3000/Patients/'+id).subscribe()
    window.location.reload();
 }

// appointment

  get_appointment(){
    return this.http.get('http://localhost:3000/appointment')
  }

  post_appointment(data:any){
    this.http.post('http://localhost:3000/appointment',data).subscribe(data=>{
      console.log(data)
    });
  }
  remove_appointment(id:any){
    this.http.delete('http://localhost:3000/appointment/'+id).subscribe()
    window.location.reload();
 }


 
// department

  getDepartment(){
    return this.http.get('http://localhost:3000/Departments')

  }

  post_department(value:any){
    this.http.post('http://localhost:3000/Departments',value).subscribe(data=>{
      console.log(data)
    })
  }

  remove_Department(id:any){
    this.http.delete('http://localhost:3000/Departments/'+id).subscribe()
    window.location.reload();
  }

  
  
}
// function deletePet(id: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function remove_patients(id: any, any: any) {
//   throw new Error('Function not implemented.');
// }

