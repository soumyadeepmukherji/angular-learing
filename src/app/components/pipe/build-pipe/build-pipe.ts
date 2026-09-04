import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipeComponentPipe } from '../pipe-component-pipe';

@Component({
  imports: [CommonModule,PipeComponentPipe],
  selector: 'app-build-pipe',
  styleUrl: './build-pipe.css',
  templateUrl: './build-pipe.html',
})
export class BuildPipe {
  date = new Date
}
