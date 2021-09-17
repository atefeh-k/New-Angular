import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventEmitter } from 'stream';
import { locationService } from '../shared/location.service';

@Component({
  selector: 'app-province-select',
  templateUrl: './province-select.component.html',
  styleUrls: ['./province-select.component.css']
})
export class ProvinceSelectComponent implements OnInit {
locations=[];
  @Input()
  selectedProvince!: number;
@Output() 
  selectedProvinceChange = new EventEmitter();
  subscriptions = new Subscription();
  constructor(private service: locationService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.locations=[];
    this.service.getProvince().subscribe((res: any) => {
    this.locations = [...this.locations,...res]; 
});

}
ngOnDestroy(): void{
  this.subscriptions.unsubscribe();
}

selected() {
  this.selectedProvinceChange.emit(this.selectedProvince);
}
}