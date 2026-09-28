import { Component } from '@angular/core';
import { BehaviorSubject, forkJoin, of, Subject } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-subject-base',
  styleUrl: './subject-base.css',
  templateUrl: './subject-base.html',
})
export class SubjectBase {

  list$ = of([1,22,5,3,6,54,8])
  list2$ = of([10,20,30,40,50])

  studentName$ = new Subject()

  movieName$ = new BehaviorSubject<string>('none')

  constructor(){
    //====Subject===
    // You need to subscribe first to get the values
    this.studentName$.subscribe(x => console.log('Name -->',x))

    this.studentName$.next('Aman')
    this.studentName$.next('Susmita')
    this.studentName$.next('Rahul')

    //====Behavior Subject====
    this.movieName$.subscribe(val => console.log('Subscriber A =>',val))

    this.movieName$.next('The dark Knignt') // A
    this.movieName$.next('Opera') // A

    this.movieName$.subscribe(val => console.log('Subscriber B =>',val)) // Get the latest value

    this.movieName$.next('The Batman') // Both will get the same value

    // Fork Join
    forkJoin([this.list$,this.list2$]).subscribe(val => console.log(val))
  }
}
