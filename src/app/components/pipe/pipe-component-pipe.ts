import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeComponent',
})
export class PipeComponentPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if(value != null && typeof(value) == 'number'){
      return '₹' + value
    }
    return null;
  }
}
