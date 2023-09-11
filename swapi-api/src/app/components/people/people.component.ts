import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from 'src/app/interfaces/person.interface';
import { AppState } from 'src/app/store/app.state';
import { fetchPeople, fetchPeopleFailure } from 'src/app/store/people/people.actions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleData: Person[] = [];
  isLoading: boolean = true;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchPeople());

    this.store.select('people').subscribe((value) => {
      this.peopleData = value.people;
      this.isLoading = value.loading;

      if (value.fetchFailure) {
        console.error('Failed to fetch people data');
      }
    });
  }
}