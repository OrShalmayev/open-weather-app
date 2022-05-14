import {Action, createReducer, on} from '@ngrx/store';
import {selectedCitiesActions} from './selected-cities.actions';
import {ISelectedCityState, selectedCityAdapter, selectedCityInitialState} from "./selected-cities.types";
import {ELoadingState} from "../../modules/@core/utility/state-management.helper";

const reducer = createReducer(
    selectedCityInitialState,
    on(selectedCitiesActions.load, (state, {payload: {query}}) => {
        return {
            ...state,
            callState: ELoadingState.LOADING
        };
    }),
    on(selectedCitiesActions.success, (state, {payload: {entity}}) => {
        return selectedCityAdapter.setOne(entity, state);
    }),
    on(selectedCitiesActions.failed, (state, {payload: {errorMsg}}) => ({
        ...state,
        callState: {errorMsg},
    }))
);

export const selectedCitiesReducer = function (state: ISelectedCityState | undefined, action: Action): ISelectedCityState {
    return reducer(state, action);
};