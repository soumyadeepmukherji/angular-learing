import { Component, signal } from '@angular/core';
import { StructuralDirective } from './components/directive/structural-directive/structural-directive';

@Component({
  imports: [StructuralDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-practice-app');
}
