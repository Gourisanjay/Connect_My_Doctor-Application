import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
  }

  add_Dep(value:any){
    value.isActive =='true'? true:false; 
     this.api.post_department(value)
  }

}
