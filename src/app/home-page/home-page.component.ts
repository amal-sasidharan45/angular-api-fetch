import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  details:any;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getdetails()
    
  }
  getdetails(){
    this.api.getdetails().subscribe((data:any)=>{
      console.log(data);
      this.details=data
      
    })
  }

}
