import { ActionReducerMap } from "@ngrx/store";
import { PeopleState, reducer as PeopleReducer } from "./people/people.reducer";

export interface AppState {
    people: PeopleState
}

export const reducers: ActionReducerMap<AppState> = {
    people: PeopleReducer
}