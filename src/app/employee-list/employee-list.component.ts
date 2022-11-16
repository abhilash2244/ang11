import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let url = 'http://localhost:8080/api/v1/getEmployees';
     
     this.http.get(url).subscribe(res =>{
      this.employees = res
     })
  }


}
