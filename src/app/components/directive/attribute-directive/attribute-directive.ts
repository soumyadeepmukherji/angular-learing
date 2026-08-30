import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,FormsModule],
  selector: 'app-attribute-directive',
  styleUrl: './attribute-directive.css',
  templateUrl: './attribute-directive.html',
})
export class AttributeDirective {
  boxColor: string = 'green'

  isActive: boolean = false

  num1:string = ''
  num2:string = ''

  changeToGreen(){
    this.boxColor = 'green'
  }

  changeToRed(){
    this.boxColor = 'red'
  }

  changeColor(){
    this.isActive = !this.isActive
  }

  myStyle: any = {
    'background-color':'green',
    'color':'white',
    'display':'flex',
    'justify-content':'center',
    'align-item':'center',
    'border-radius':'10%'
  }
}
