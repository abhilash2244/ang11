import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students:any;
  searchVariable:any;


  constructor(private http: HttpClient,
    private dataService : DataService) { }

  ngOnInit(): void {
    let url = 'http://localhost:8080/api/v1/getstudents';
     
     this.http.get(url).subscribe(res =>{
      this.students = res
     })

     this.dataService.emitSearchVariable.subscribe(res=>{
       console.log(res)
      this.searchVariable = res
     })


  }
  // ngOnDestroy() {
  //   this.dataService.emitSearchVariable.unsubscribe()
  // }


}
