import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit {
  // https://angular.io/guide/lifecycle-hooks
  constructor(){console.log("Constructor");
  }
  // Respond when Angular sets or resets data-bound input properties. The method receives a 
  //SimpleChanges object of current and previous property values.
  ngOnChanges(){
    console.log("ngonchanges")
  }
  // called once
  ngOnInit(): void {
    console.log("ngoninit");
  }
  // Detect and act upon changes that Angular can't or won't detect on its own. 
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  // Respond after Angular projects external content into the component's view, or into the view that a directive is in.
  ngAfterContentInit()	{
    console.log("ngAfterContentInit");
    
  }
  // Respond after Angular checks the content projected into the directive or component.
  ngAfterContentChecked()	{
    console.log("ngAfterContentChecked()	");
    
  }
  // Respond after Angular initializes the component's views and child views, or the view that contains the directive.
  ngAfterViewInit()	{
    console.log("ngAfterViewInit");
    
  }
  // Respond after Angular checks the component's views and child views, or the view that contains the directive.
  ngAfterViewChecked()	{
    console.log("ngAfterViewChecked");
    
  }
// Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
  ngOnDestroy()	{

  }
}
