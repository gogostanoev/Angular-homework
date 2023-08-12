import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {
  @Output() showRented = new EventEmitter<number>();
  @Output() showAvailable = new EventEmitter<number>();
  @Output() resetFilter = new EventEmitter<number>();

  onShowRented = () => {
    this.showRented.emit();
  };

  onShowAvailable = () => {
    this.showAvailable.emit();
  };

  onResetFilter = () => {
    this.resetFilter.emit();
  };
}
