import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AddAppointmentDistributorService } from 'src/app/appointments/core/add-appointment-distributor.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {

  constructor( private addPatients:AddAppointmentDistributorService, private api:ApiService) { }
  addPets(value:any){
    this.api.post_patients(value);
    console.log(value);
  

  }

  ngOnInit(): void {
  }

}
