import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  constructor(private api:ApiService) { }
  appointment:any;

  ngOnInit(): void {
    this.api.get_appointment().subscribe(data=>{
      this.appointment = data;

    });
  }
  temp:any;
  delete_app(a:any){
    this.temp=a.id
  }

  remove_app(){
    this.api.remove_appointment(this.temp);
    
  }


  list:boolean=false;
  card:boolean=true;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

}
