import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(private api:ApiService) { }
  patients:any;

  ngOnInit(): void {
    this.api.get_patients().subscribe(data=>{
      this.patients = data;
  })}

  temp:any;
  delete_pets(value:any){
    this.temp=value.id
  }
  remove_pets(){
    this.api.remove_patients(this.temp);
    
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
