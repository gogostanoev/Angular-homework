import { Component } from '@angular/core';
import { CarRentingService } from './services/car-renting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly carRentingService: CarRentingService) {}
  
  sort: string = ''
  firstMessage: string = 'Welcome to our car rental app!'
  secondMessage: string = 'Here is a collection of a few of our cars.'

  onSelectFilter = (value: string) => {
    this.carRentingService.setSelectedFilter(value);
  };
}
