import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform<T>(array: T[] | ReadonlyArray<T> | null, keys: Array<keyof T>, isAsc: boolean = true): T[] | ReadonlyArray<T> | null {
    if (!Array.isArray(array)) {
      return array;
    }
    const copyArray = [...array]; // required for Readonly arrays
    const orderingValue = isAsc ? 1 : -1;
    return copyArray.sort((a, b) => {
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
