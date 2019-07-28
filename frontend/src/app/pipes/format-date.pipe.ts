import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string): string {
    const rawDate: Date = new Date(parseInt(date, 10));
    const day: number = rawDate.getDate();
    const month: string = rawDate.toLocaleString('default', { month: 'long' });
    const year: number = rawDate.getFullYear();
    return `${day} ${month} ${year}`;
  }

}
