import { Component, OnInit } from '@angular/core';
import { AddAppointmentDistributorService } from '../../core/add-appointment-distributor.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {


    // Variable declaration and initialization

  // Dependency Injection inside constructor
  constructor(private addAppointmentDistributorService:AddAppointmentDistributorService,private api:ApiService) { }


  ngOnInit(): void {

    // Fetch / Load data


    // Validation Logic
  }
  addAppo(value:any){
    this.api.post_appointment(value);
    console.log(value)

  }



  // Logic for the submit
  onSubmit() {

  }
}
