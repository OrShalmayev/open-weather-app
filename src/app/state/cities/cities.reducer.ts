import {createReducer, Action, on} from '@ngrx/store';
import {citiesActions} from './cities.actions';
import {citiesInitialState, ICitiesState} from "./cities.types";
import {ELoadingState} from "../../modules/@core/utility/state-management.helper";

const reducer = createReducer(
    citiesInitialState,
    on(citiesActions.clear, () => citiesInitialState),
    on(citiesActions.load, state => ({
        ...state,
        callState: ELoadingState.LOADING
    })),
    on(citiesActions.success, (state, {payload: {cities}}) => ({
        ...state,
        cities: [
            // filter unique by key
            ...new Map([...state.cities, ...cities].map(c => {
                return [c.geonameid, c];
            })).values()
        ],
        callState: ELoadingState.LOADED
    })),
    on(citiesActions.failed, (state, {payload: {errorMsg}}) => ({
        ...state,
        callState: {errorMsg},
    }))
);

export const citiesReducer = function (state: ICitiesState | undefined, action: Action): ICitiesState {
    return reducer(state, action);
};