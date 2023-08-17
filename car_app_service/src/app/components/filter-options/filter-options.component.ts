import { Component, EventEmitter, Output } from '@angular/core';
import { CarRentingService } from 'src/app/services/car-renting.service';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {
  constructor(private readonly carRentingService: CarRentingService) {}

  onShowRented() {
    this.carRentingService.allRentedCars();
  };

  onShowAvailable() {
    this.carRentingService.allAvailableCars();
  };

  onResetFilter() {
    this.carRentingService.fullReset();
  };
};
