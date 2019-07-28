import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutDescription'
})
export class CutDescriptionPipe implements PipeTransform {

  transform(description: string): string {
    const descriptionArray: string[] = description.split(' ').slice(0, 14);
    return `${descriptionArray.join(' ')}...`;
  }

}
