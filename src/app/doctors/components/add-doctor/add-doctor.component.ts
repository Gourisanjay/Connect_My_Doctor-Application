import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {

  }

  add_Doc(value:any){
    this.api.post_Doctor(value);
    console.log(value);
  }

}
