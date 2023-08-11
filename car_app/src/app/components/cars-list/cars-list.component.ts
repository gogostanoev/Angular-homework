import { Component, Input } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  @Input()
  cars_list: Car[] = []
}
