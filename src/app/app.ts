import { Component, signal } from '@angular/core';
import { StructuralDirective } from './components/directive/structural-directive/structural-directive';
import { AttributeDirective } from './components/directive/attribute-directive/attribute-directive';

@Component({
  imports: [StructuralDirective,AttributeDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-practice-app');
}
