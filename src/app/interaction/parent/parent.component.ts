import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit,AfterViewInit {
inputData:any = "input()";
dataFromChild:any;
inputDatafromParent:any

@ViewChild(ChildComponent) child ! : ChildComponent;
  constructor(
    private cd:ChangeDetectorRef
  ) { }

  ngOnInit(): void { }
  ngAfterViewInit() {
    // this.cd.detectChanges()
    console.log(this.child.childData)
    
  }
  sendData(){
this.inputDatafromParent = this.inputData

  }
  sendDataToPArent(event:any){
    console.log(event)
    this.dataFromChild=event

  }
}
