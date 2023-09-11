import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapiApi } from '../interfaces/swapi-api.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly URL = 'https://swapi.dev/api/people';

  constructor(private readonly http: HttpClient) {}

  getPeople = () => {
    return this.http.get<SwapiApi>(this.URL);
  };
}
