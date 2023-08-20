import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car.interface';
import { cars } from 'src/mock-data/cars';

@Injectable({
  providedIn: 'root'
})
export class CarRentingService {
  private displayedCars: Car[] = cars;
  private originalCars: Car[] = [...cars]
  private filteredCars: Car[] = [];

  constructor() {}

  getCars(): Car[] {
    return this.displayedCars
  }

  toggleRent = (carId: number) => {
    this.displayedCars = this.displayedCars.map((car) => {
      if(car.id === carId && !car.isRented) {
        return {
          ...car,
          isRented: true
        }
      } else if (car.id === carId && car.isRented){
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
    // console.log("which cars are rented?", this.filteredCars)
  };

  allAvailableCars = () => {
    this.filteredCars = this.originalCars.filter(car => !car.isRented);
    this.displayedCars = this.filteredCars;
    // console.log("Which cars are available?", this.filteredCars)
  };

  fullReset = () => {
    this.displayedCars = this.originalCars;
  };
}
