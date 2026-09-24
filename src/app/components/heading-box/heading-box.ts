import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-heading-box',
  styleUrl: './heading-box.css',
  templateUrl: './heading-box.html',
})
export class HeadingBox {
  @Input() heading = ''
  @Input() style = {}

  @Output() headClick = new EventEmitter<string>()

  sendMsg(){
    this.headClick.emit("Hello From Srikanth")
  }
}
