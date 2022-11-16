import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
  searchVariable:any;

  searchEvent(searchValue: any): void {  
    // console.log(searchValue.value);
  
    this.dataService.searchMethodCall(searchValue.value)

  }
}
