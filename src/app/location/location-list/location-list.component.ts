import { Component, OnInit } from '@angular/core';
import { locationService } from '../shared/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  [x: string]: any;

  constructor(
    private service: locationService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
     this.service.getProvince().subscribe((result: any)=>{
       this.result=result;
     })
    }
    delete(index: any){
      this.result.splice(index,1);
    }
}
