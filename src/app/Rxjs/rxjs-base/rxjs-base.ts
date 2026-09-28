import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, of, Subscription, tap, timer } from 'rxjs';
import { SubjectBase } from '../subject-base/subject-base';

@Component({
  imports: [SubjectBase],
  selector: 'app-rxjs-base',
  styleUrl: './rxjs-base.css',
  templateUrl: './rxjs-base.html',
})
export class RxjsBase {

  private mySubscribe :Subscription

  // Creation Operators
  obs1$ = of(10,20,30)

  obs2$ = from(['a','b','c'])

  inter$ = interval(1000)

  timer$ = timer(3000)
  // timer$ = timer(3000,1000) // For Repetation

  list$ = of(11,33,56,85,69,9,41,22)

  constructor(){

    this.obs1$.subscribe(val => console.log('create : ',val))

    this.obs2$.subscribe(val => console.log('new : ',val))

    this.mySubscribe = this.inter$.subscribe(val => console.log('Interval : ',val))

    this.timer$.subscribe(val => console.log('timer',val))

    setTimeout(() => {
      this.mySubscribe.unsubscribe()
      
    },10000)

    this.list$.pipe( map(x => x*10) ).subscribe(val => console.log('new val : ',val))

    this.list$.pipe( filter(x => x%2 == 0) ).subscribe(val => console.log('even val : ',val))

    this.list$.pipe(tap(x => console.log('Recive:',x))).subscribe(val => console.log(val))

    // Declaring Observable
    const myObs$ = new Observable(observer => {
      observer.next(10)
      observer.next("Angular")
      observer.next(true)
      observer.complete()
    })

    // Subscribing
    myObs$.subscribe(val => console.log(val))

    // Observers Callbacks
    myObs$.subscribe({
      next: value => console.log('value :',value),
      complete: () => console.log('Done'),
      error: error => console.log(error)
    })

  }
}
