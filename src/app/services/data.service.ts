import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  emitSearchVariable = new EventEmitter<any>();

  searchMethodCall(data:any){
    this.emitSearchVariable.emit(data)
  }
}
