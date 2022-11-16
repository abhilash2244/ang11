import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  inputData:any = "output()"
  @Input() inputDatafromParent:any;
  @Output() sendDataToPArent = new EventEmitter<String>();

  childData:String = "This is from child comp fetched using view child "
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    this.sendDataToPArent.emit(this.inputData)

  }

}
