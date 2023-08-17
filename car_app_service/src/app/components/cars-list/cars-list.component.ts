import { Component, OnInit, DoCheck } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarRentingService } from 'src/app/services/car-renting.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements DoCheck, OnInit {
  constructor(private readonly carRentingService: CarRentingService) {}

  cars_list: Car[] = [];
  selectedSortDirection: string = 'asc';

  ngDoCheck(): void {
    this.cars_list = this.carRentingService.getCars()
    // console.log("active")
  };

  ngOnInit(): void {
    this.carRentingService._filterSort.subscribe((data) => {
      console.log('Data:', data);

      this.selectedSortDirection = data;
    });
  };

  rentCar(carId: number) {
    this.carRentingService.rentTheCar(carId);
  };

  returnCar(carId: number) {
    this.carRentingService.returnTheCar(carId);
  };
};
