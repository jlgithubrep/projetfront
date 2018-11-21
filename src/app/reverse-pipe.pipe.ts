import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipePipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}
