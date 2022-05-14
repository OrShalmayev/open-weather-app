import { createReducer, Action, on } from '@ngrx/store'
import { CitiesResponse } from '../../models/cities.model';
import * as fromCitiesActions from './cities.actions'
export interface ICitiesState {
    list: CitiesResponse[];
    loading: boolean;
    error: boolean;
}
export const citiesInitialState: ICitiesState = {
    list: [],
    loading: false,
    error: false,
}

const reducer = createReducer(
    citiesInitialState,
    on(fromCitiesActions.clearCitiesState, () => citiesInitialState),
    on(fromCitiesActions.loadCities, state => ({
        ...state,
        loading: true,
        error: false,
    })),
    on(fromCitiesActions.loadCitiesSuccess, (state, { list }) => ({
        ...state,
        list: [
            // filter unique by key
            ...new Map([...state.list, ...list].map(c => {
                return [c.Key, c];
            })).values()
        ],
        loading: false,
    })),
    on(fromCitiesActions.loadCitiesFailed, state => ({
        ...state,
        loading: false,
        error: true,
    }))
);
export function citiesReducer(state: ICitiesState | undefined, action: Action): ICitiesState {
    return reducer(state, action);
}