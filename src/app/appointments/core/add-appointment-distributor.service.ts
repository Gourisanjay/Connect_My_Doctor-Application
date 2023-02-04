import { Injectable } from '@angular/core';
import { AddAppiontmentService } from '../services/add-appiontment.service';
//This is the distributer service. There will one distributer per component
//and only that component has access to the distributer
//The component will talk to service layer only via distributer service
//the job of distributer is to call service(which calls the repository...)
//The distributer can call the service of the component it is associated with alongside any other
//Service. It doesn't matter.
@Injectable({
  providedIn: 'root'
})
export class AddAppointmentDistributorService {

  // Inject  Service in the constructor
  constructor(private addAppiontmentService:AddAppiontmentService) { }

  // get the data from Service after validating according to the business rules
}
