import { createReducer, on } from "@ngrx/store";
import { Person } from "src/app/interfaces/person.interface";
import * as PeopleActions from './people.actions';

export interface PeopleState {
    [x: string]: any;
    people: Person[];
    loading: boolean;
    fetchFailure: boolean;
};

export const initialState: PeopleState = {
    people: [],
    loading: false,
    fetchFailure: false
};

export const reducer = createReducer(
    initialState,

    on(PeopleActions.fetchPeople, (state) => {
        return {
            ...state,
            loading: true,
            fetchFailure: false
        };
    }),

    on(PeopleActions.fetchPeopleSuccess, (state, payload) => {
        return {
            ...state,
            people: payload.people,
            loading: false,
            fetchFailure: false
        };
    }),

    on(PeopleActions.fetchPeopleFailure, (state) => {
        return {
            ...state,
            loading: false,
            fetchFailure: true
        };
    })
)