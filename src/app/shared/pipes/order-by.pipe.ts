import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform<T>(array: T[] | null, keys: Array<keyof T>, isAsc: boolean = true): T[] | null {
    if (!Array.isArray(array)) {
      return array;
    }
    const orderingValue = isAsc ? 1 : -1;
    return array.sort((a, b) => {
      for (const key of keys) {
        if (a[key] > b[key])
          return orderingValue;
        if (a[key] < b[key])
          return -orderingValue;
      }
      return 0;
    });
  }

}
