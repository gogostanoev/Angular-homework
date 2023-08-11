import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  @Input()
  cars_list: Car[] = []

  @Output() rentACar = new EventEmitter<number>();
  @Output() returnACar = new EventEmitter<number>();

  rentCar = (carId: number) => {
    this.rentACar.emit(carId);
  };

  returnCar = (carId: number) => {
    this.returnACar.emit(carId);
  };
}
