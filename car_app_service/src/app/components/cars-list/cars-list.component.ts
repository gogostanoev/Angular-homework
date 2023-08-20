import { Component, DoCheck } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarRentingService } from 'src/app/services/car-renting.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements DoCheck {
  constructor(private readonly carRentingService: CarRentingService) {}

  cars_list: Car[] = [];
  selectedSortDirection: string = 'asc';

  ngDoCheck(): void {
    this.cars_list = this.carRentingService.getCars()
    // console.log("active")
  };

  rentCar(carId: number) {
    this.carRentingService.toggleRent(carId);
  };

  returnCar(carId: number) {
    this.carRentingService.toggleRent(carId);
  };
};
