import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  Doctors: any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get_Doctor().subscribe(data=>{
      this.Doctors = data;
      console.log(data);
  });
}

temp:any;
delete_Doc(value:any){
  this.temp=value.id
}

remove_Doc(){
  this.api.remove_Doctor(this.temp);
  
}
list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }
}
