import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-life-cycle',
  styleUrl: './life-cycle.css',
  templateUrl: './life-cycle.html',
})
export class LifeCycle implements DoCheck,OnDestroy {

  count = 0

  constructor(){
    console.log('Component run')
  }

  inc(){
    this.count = this.count + 1
  }

  ngDoCheck(){
    console.log('Checked')
  }

  ngOnDestroy(): void {
    console.log('Component removed');
    
  }
}
