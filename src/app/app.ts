import { CommonModule } from '@angular/common';
import { Component, signal, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  imports: [RouterOutlet, RouterLinkWithHref,CommonModule,CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  userName = 'Soumyadeep'

  @ViewChild('View') temp : TemplateRef<any> | undefined

  @ViewChild('container',{read:ViewContainerRef}) viewConatiner : ViewContainerRef | undefined

  onClick(){
    if(this.temp){
      this.viewConatiner?.createEmbeddedView(this.temp)
    }
  }

  logout(){
    localStorage.setItem('status','false')
  }
}
