import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-life-cycle',
  styleUrl: './life-cycle.css',
  templateUrl: './life-cycle.html',
})
export class LifeCycle implements OnInit  {

  // It get Executed First
  constructor(){
    console.log('Constructor')
  }

  // It is executed once after Initialization
  ngOnInit(): void {
    console.log("ngOnInit")
  }

  

}
