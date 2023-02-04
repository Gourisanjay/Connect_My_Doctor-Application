import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  Departments:any;

  constructor(private api:ApiService) { }
  

  ngOnInit(): void {
    this.api.getDepartment().subscribe(data=>{
      this.Departments=data;
      console.log(data);
  })
}

  temp:any;
  set_Data(d:any){
    this.temp=d.id;
  }


  delet_Department(){
    this.api.remove_Department(this.temp)
  }
  



  }

  
