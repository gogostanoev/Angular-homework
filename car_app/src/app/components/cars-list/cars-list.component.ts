import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { cars } from 'src/mock-data/cars';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  @Input()
  cars_list: Car[] = [];
  @Input()
  originalCars: Car[] = [...cars];

  filteredCars: Car[] = [];
  
  // The Ascending option should be pre-selected.
  selectedSortDirection: 'asc' | 'desc' = 'asc';

  @Output() rentACar = new EventEmitter<number>();
  @Output() returnACar = new EventEmitter<number>();

  rentCar = (carId: number) => {
    this.rentACar.emit(carId);
  };

  returnCar = (carId: number) => {
    this.returnACar.emit(carId);
  };

  allRentedCars = () => {
    this.filteredCars = this.originalCars.filter(car => car.isRented);
    this.cars_list = this.filteredCars;
    // console.log("which cars are rented?", this.filteredCars)
  };

  allAvailableCars = () => {
    this.filteredCars = this.originalCars.filter(car => !car.isRented);
    this.cars_list = this.filteredCars;
    // console.log("Which cars are available?", this.filteredCars)
  };

  fullReset = () => {
    this.cars_list = this.originalCars;
    // console.log(this.cars_list)
    // console.log(this.originalCars)
  };
}
