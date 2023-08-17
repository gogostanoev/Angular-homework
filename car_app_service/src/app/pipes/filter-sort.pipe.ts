import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Pipe({
  name: 'filterSort'
})
export class FilterSortPipe implements PipeTransform {

  transform(priceRange: Car[], sortDirection: string): Car[] {
    const sortedCars = [...priceRange].sort((a, b) => {
      if(sortDirection === 'asc') {
        return a.priceToRent - b.priceToRent;
      } else {
        return b.priceToRent - a.priceToRent;
      }
    });
    return sortedCars;
  }

}
