import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  imports: [RouterOutlet, RouterLinkWithHref,CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-practice-app');
}
