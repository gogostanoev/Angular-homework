import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PeopleService } from 'src/app/service/people.service';
import * as PeopleActions from './people.actions';
import { map, switchMap } from 'rxjs';
import { Person } from 'src/app/interfaces/person.interface';

@Injectable()
export class PeopleEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly peopleService: PeopleService
  ) {}

  fetchPeople$ = createEffect(() => 
    this.actions$.pipe(
      ofType(PeopleActions.FETCH_PEOPLE),
      switchMap(() => 
        this.peopleService.getPeople().pipe(
          map((data) => {
            console.log(data);

            const people: Person[] = data.results.map((person) => {
              return {
                name: person.name,
                gender: person.gender,
                birth_year: person.birth_year,
                height: person.height,
                mass: person.mass
              }
            });

            return PeopleActions.fetchPeopleSuccess({ people: people })
          })
        )
      )
    )
  );
}
