import { EventEmitter, Injectable } from '@angular/core';
import { Car } from '../interfaces/car.interface';
import { cars } from 'src/mock-data/cars';

@Injectable({
  providedIn: 'root'
})
export class CarRentingService {
  private displayedCars: Car[] = cars;
  private originalCars: Car[] = [...cars]
  private filteredCars: Car[] = [];

  _filterSort = new EventEmitter<string>();

  constructor() {}

  getCars(): Car[] {
    return this.displayedCars
  }

  rentTheCar = (carId: number) => {
    this.displayedCars = this.displayedCars.map((car) => {
      if(car.id === carId && !car.isRented) {
        return {
          ...car,
          isRented: true
        }
      }
      return car
    });
  };

  returnTheCar = (carId: number) => {
    this.displayedCars = this.displayedCars.map((car) => {
      if(car.id === carId && car.isRented) {
        return {
          ...car,
          isRented: false
        }
      }
      return car
    });
  };

  allRentedCars = () => {
    this.filteredCars = this.originalCars.filter(car => car.isRented);
    this.displayedCars = this.filteredCars;
  };

  allAvailableCars = () => {
    this.filteredCars = this.originalCars.filter(car => !car.isRented);
    this.displayedCars = this.filteredCars;
    console.log(this.displayedCars)
  };

  fullReset = () => {
    this.displayedCars = this.originalCars;
  };

  setSelectedFilter = (value: string) => {
    console.log('Selected value is:', value);

    this._filterSort.emit(value);
  }
}
