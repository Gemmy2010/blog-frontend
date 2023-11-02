import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpts',
})
export class ExcerptsPipe implements PipeTransform {
  transform(value: string): string {
    const words = value.split(' ');
    if (words.length > 40) {
      return words.slice(0, 40).join(' ') + '...';
    }
    return value;
  }
}
