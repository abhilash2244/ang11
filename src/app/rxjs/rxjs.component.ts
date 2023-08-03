import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  exhaustMap,
  filter,
  from,
  interval,
  map,
  Observable,
  of,
  ReplaySubject,
  Subject,
  switchMap,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  observable = new Observable((observer: any) => {
    var intervaltime: any = 0;
    // observer.next('Started ');
    // observer.next(' Interval begins ');

    setInterval(() => {
      observer.next((intervaltime += 1));
    }, 1000);

    setTimeout(() => {
      observer.error(new Error('Please try again'));
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 25000);
  });

  array1 = [1, 2, 3, 4, 5];
  myObservable2 = from(this.array1);
  transformedObservable = this.myObservable2.pipe(map((data: any) => data * 5));
  constructor(public http: HttpClient) {}
  ngOnInit(): void {
    // behavioural subject vs subject ---------------
    const subject = new Subject<string>();
    const behaviorSubject = new BehaviorSubject<string>('default value');
    const replaySubject = new ReplaySubject(2);
    const asyncSubject = new AsyncSubject<string>();

    subject.next('hello');
    behaviorSubject.next('hello');
    replaySubject.next('1 reply');
    replaySubject.next('2 reply');
    replaySubject.next('3 reply');

    asyncSubject.next('async one');
    asyncSubject.complete();

    // this will not print value because it will print only after subscribed and the values assigned after subscription
    subject.subscribe((value) => console.log('Subject subscription:', value));
    // this willl print the latest value set even before subscribed
    behaviorSubject.subscribe((value) =>
      console.log('BehavioralSubject subscription:', value)
    );
    // this will print the last number of values which we given in the parameter
    replaySubject.subscribe((value) => console.log(value));
    // this will print values only when the subject is complete
    asyncSubject.subscribe((value) => console.log(value));

    // =================================

    // =switch map-----------------------
    let text = of('Hello guys, Welcome To');
    let case1 = text.pipe(switchMap((value) => of(value + ' JavaTpoint!')));
    case1.subscribe((value) => {
      console.log(value);
    });
    // =================

    // tap and of operator ----------------
    const source = of(1, 2, 3);
    source
      .pipe(tap((value) => console.log(`Emitted value: ${value}`)))
      .subscribe();
    // Note that the tap operator is generally used for debugging, or creating side effects or logging purposes and should be
    // used with caution, as it can lead to unexpected behavior if used improperly.
    // -------------------------------------
    this.observable
      .pipe(filter((data: any) => data > 2))
      .pipe(map((data: any) => 'print -  ' + data))
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error): any => {
          console.log('error');
        },
        () => {
          console.log('complete');
        }
      );
  }

  def() {
    let postIds = interval(1).pipe(
      filter((val) => val > 0),
      take(5)
    );

    postIds
      .pipe(
        exhaustMap((id) => { // use all four or fice operators here and see results
          return this.http.get(
            `https://isonplaceholder.typicode.com/posts/${id}`
          );
        })
      )
      .subscribe((postdetails) => {
        console.log(postdetails);
      });
  }
}
