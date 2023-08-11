import { Component } from '@angular/core';
import { cars } from 'src/mock-data/cars';
import { Car } from './interfaces/car.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstMessage: string = 'Welcome to our car rental app!'
  secondMessage: string = 'Here is a collection of a few of our cars.'
  
  displayedCars: Car[] = cars;

  rentTheCar = (carId: number) => {
    this.displayedCars = this.displayedCars.map((car) => {
      if(car.id === carId && !car.isRented) {
        return {
          ...car,
          isRented: true
        }
      }
      console.log(car.isRented, "first")
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
      console.log(car.isRented, "second")
      return car
    });
  };
};
