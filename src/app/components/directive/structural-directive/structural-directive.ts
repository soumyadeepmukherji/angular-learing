import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,FormsModule],
  selector: 'app-structural-directive',
  styleUrl: './structural-directive.css',
  templateUrl: './structural-directive.html',
})
export class StructuralDirective {

  isBoxVisible: boolean = true

  isToggle: boolean = true

  playerOne: number = 0
  playerTwo: number = 0

  foodArray: string[] = ['Ideli','Dosa','Samosa','Vada pav','Jalmuri']
  cityArray: string[] = ['Banglore','Kolkata','Mumbai','Chennai','Hyderabad']
  // cityName: string[] = ['ಬೆಂಗಳೂರು','কলকাতা','मुंबई','சென்னை','హైదరాబాదు']

  cityTrack: string ="INDIA"

  // cityLang = [{'Banglore':'ಬೆಂಗಳೂರು'},{'Kolkata':'কলকাতা'},{'Mumbai':'मुंबई'},{'Chennai':'சென்னை'},{'Hyderabad':'హైదరాబాదు'}]
  cityLang = [
    {name:'Banglore', lang:'ಬೆಂಗಳೂರು'},
    {name:'Kolkata', lang:'কলকাতা'},
    {name:'Mumbai', lang:'मुंबई'},
    {name:'Chennai', lang:'சென்னை'},
    {name:'Hyderabad', lang:'హైదరాబాదు'}
  ]

  show(){
    this.isBoxVisible = true
  }

  hide(){
    this.isBoxVisible = false
  }

  toggle(){
    this.isToggle = !this.isToggle
  }

}
