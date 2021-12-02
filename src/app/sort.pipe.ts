import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: [], field: string, direction: string): [] {
    if (!Array.isArray(array)) {
      return array;
    }
    if (direction === 'desc') {
      array.sort((a: any, b: any) => {
       if (a[field] > b[field]) {
         return -1;
       } else if (a[field] < b[field]) {
         return 1;
       } else {
         return 0;
       }
     });
    } else {
      array.sort((a: any, b: any) => {
       if (a[field] < b[field]) {
         return -1;
       } else if (a[field] > b[field]) {
         return 1;
       } else {
         return 0;
       }
     });
    }
    return array;
  }

}
