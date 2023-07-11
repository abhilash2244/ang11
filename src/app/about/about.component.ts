import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  // data:any;

  snippet1 = `
  @Injectable({
    providedIn: 'root' (if the scope is root no need to give in providers)
  })
  export class DataService {
  `;

  snippet2 = `  providers: [DataService],
  `;
  snippet3 = `providers: [{provide:DataService, useclass:alternateDataservice }]`;

  snipper4 = `  constructor(@inject(DataService) private dataService: DataService) { }
  `;
  snippet5 = `
@Injectable({
  providedIn: 'root' (if the scope is root no need to give in providers)
})
@Injectable({
  providedIn: 'any' (if the scope is root no need to give in providers)
})
@Injectable({
  providedIn: 'appModule' (if the scope is root no need to give in providers)
})
@Injectable({
  providedIn: 'platform' (if the scope is root no need to give in providers)
})
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers:[DataService] 
})

`;

  snippet6 = `
cmd to install :  ng generate directive highlight
looks like below:

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}


usage : 

<p appHighlight>Highlight me!</p>
`;
  snippet7 = `
There are four main types of angular decorators:

Class decorators, such as @Component and @NgModule
Property decorators for properties inside classes, such as @Input and @Output
Method decorators for methods inside classes, such as @HostListener
Parameter decorators for parameters inside class constructors, such as @Inject

`;
  snippet8 = `
In Angular, RxJS is used to handle asynchronous data and events. There are several types of subjects in RxJS, including:

BehaviourSubject: This subject maintains a current value and emits it to all subscribers when they subscribe.
             For example, a BehaviourSubject could be used to store and update the current user's information in a web application.

ReplaySubject: This subject maintains a buffer of previous values and emits them to new subscribers when
               they subscribe. For example, a ReplaySubject could be used to store and replay the last 10 user actions in a web application.

AsyncSubject: This subject only emits the last value to subscribers when the subject completes. 
            For example, an AsyncSubject could be used to emit the final result of an asynchronous computation.

Subject: This subject is a basic subject that does not maintain any previous values or have any special 
          behavior. It is often used as a simple way to create an observable.

Multicast Subject: This subject allows you to share a single execution of an observable to multiple 
                    subscribers.

Publish Subject: It emits all the items from source Observable to all the subscribers, but only after 
                the connect() method is called by any subscriber.

These are just a few examples of the types of subjects available in RxJS. Each has its own specific use case, and the appropriate subject to use will depend on the specific requirements of your application.
`;


  data = [
    {
      heading: 'Angular 13, which was released on December 15, 2020',
      description: `
    Angular 13, which was released on December 15, 2020
    Improved type-checking for templates
    More efficient change detection
    Deprecation of the HttpClientJsonpModule
    Improved support for web workers
    Improved support for TypeScript 4.1:
    Removed view engine and replaced ivy engine
    
    Angular 10 was released on June 24, 2020:
    Automatic Inlining of Fonts: 
    New Date Range Picker
    Deprecation of the <ng-container> element: instead use <>
    Improved Support for TypeScript 3.9:
     `,
    },
    {
      heading: 'AOT JIT',
      description: `
AOT: In simple words, when you serve/build your angular application, the Ahead of Time compiler converts your 
code during the build time before your browser downloads and runs that code. From Angular 9, by default 
compiling option is set to true for ahead of time compiler.  

JIT: Just in time compiler provides compilation during the execution of the program at a run time before 
execution. In simple words, code get compiles when it’s needed, not at the build time.

`,
    },
    {
      heading : "Change Detection Strategy",
      description : `
      In Angular, change detection refers to the process of detecting changes in the application state and updating the view accordingly. Change detection is an essential part of the Angular framework, and it is responsible for updating the user interface when the application data changes.

Angular provides two change detection strategies, which are:

Default change detection strategy:
This strategy is also called the dirty checking strategy. It detects changes by checking every component and its children, which can be a time-consuming process for large applications with many components. With this strategy, Angular checks all the bindings and updates the view for any changes.

OnPush change detection strategy:
This strategy is an optimization of the default strategy, where Angular only checks for changes when the input properties of the component change, or when an event is triggered. It means that if there is no change in the input properties or event, the component and its children will not be checked. This approach can significantly improve the performance of an application.

There are three methods that you can use to implement change detection strategy in Angular:

Default change detection strategy:
This strategy is the default, and you don't need to do anything to enable it. Angular will automatically detect changes and update the view.

OnPush change detection strategy:
To enable the OnPush strategy, you need to add the changeDetection property to the @Component decorator and set it to ChangeDetectionStrategy.OnPush. This tells Angular to use the OnPush strategy for this component.

Example:

less
Copy code
@Component({
  selector: 'my-component',
  templateUrl: './my-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  // ...
}
Manual change detection strategy:
In some cases, you may need to trigger change detection manually. To do this, you can use the ChangeDetectorRef service, which is injected into the component. This service provides two methods, detectChanges() and markForCheck(), that you can use to manually trigger change detection.
Example:

typescript
Copy code
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.html'
})
export class MyComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  updateData() {
    // update data here
    this.cdr.detectChanges(); // manually trigger change detection
  }
}
In conclusion, the change detection strategy is an essential concept in Angular that helps to optimize the performance of an application. By default, Angular uses the dirty checking strategy, but you can also use the OnPush strategy or trigger change detection manually using the ChangeDetectorRef service.

      `
    },

    {
      heading : "Change Detection Strategy methoda",
      description :  `
      The ChangeDetectorRef is a service in Angular that provides methods to manually trigger change detection for a component and its children. Here are the methods and their uses:

detectChanges():
The detectChanges() method is used to trigger change detection manually for a component and its children. This method is called automatically by Angular after an event or change in the component, but in some cases, you may need to call it manually. For example, when you update the data in a component outside of Angular's context, you can call detectChanges() to update the view.

markForCheck():
The markForCheck() method is used to mark a component and its children for change detection on the next cycle. This method does not trigger change detection immediately but marks the component for checking during the next change detection cycle. This method is useful when you have a component that receives data from a parent component via input properties, but the data changes outside of Angular's context.

detach():
The detach() method is used to detach a component and its children from the change detection tree. This method is useful when you have a component that is not frequently updated, and you want to optimize the performance of the application by excluding it from the change detection tree. You can use the reattach() method to reattach the component to the change detection tree.

reattach():
The reattach() method is used to reattach a detached component and its children to the change detection tree. This method is used in conjunction with the detach() method and is used to restore the component to the change detection tree.

checkNoChanges():
The checkNoChanges() method is used to check if there are any changes in the component and its children. This method is useful when you want to check if a component has changed without triggering change detection. If there are changes, an error will be thrown.
      `
    },{
      heading: "Pure and Impure pipe",
      description : `
      Pure Pipe:
A pure pipe is a pipe that is only called when its input data changes. The input data is immutable and does not change, the pipe won't be re-evaluated. Angular only calls the transform() method of a pure pipe when it detects a change in the input data. This can help to improve the performance of an application as Angular does not need to call the transform() method unnecessarily.
To create a pure pipe, you need to add the pure: true property to the @Pipe decorator, or omit it because it's the default behavior.
@Pipe({
  name: 'myPurePipe',
  pure: true
})
export class MyPurePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // transform data here
    return transformedValue;
  }
}
Impure Pipe:
An impure pipe is a pipe that is called on every change detection cycle, even if the input data has not changed. This means that the transform() method of an impure pipe can be called multiple times, even if the input data has not changed. This can impact the performance of an application, and it's not recommended to use impure pipes unless you really need them.
To create an impure pipe, you need to omit the pure property in the @Pipe decorator or set it to false.      
`
    },
    {
      heading:"Async pipe",
      description : `
      <div>{{ observable$ | async }}</div>
      If we use async we will be able to display the data once we receive it untill it will be empty, otherwise it will sow [object object ]
When you use the async pipe, Angular automatically subscribes to the Observable or Promise and unsubscribes when the component is destroyed, preventing memory leaks.

The async pipe can also be used with other Angular features such as NgIf, NgFor, and NgSwitch, allowing you to write more concise and readable code.

In conclusion, the async pipe is a built-in Angular pipe that is used to automatically subscribe to an Observable or Promise and update the view with the emitted data or resolved value. It simplifies the code and prevents memory leaks by automatically subscribing and unsubscribing.
      `
    }
  ];
}
