import {Action, createReducer, on} from '@ngrx/store';
import {selectedCitiesActions} from './selected-cities.actions';
import {ISelectedCityState, selectedCityAdapter, selectedCityInitialState} from "./selected-cities.types";
import {ELoadingState} from "../../modules/@core/utility/state-management.helper";

const reducer = createReducer(
    selectedCityInitialState,
    //LOAD
    on(selectedCitiesActions.load, (state, {payload: {query}}) => {
        return {
            ...state,
            callState: ELoadingState.LOADING
        };
    }),
    on(selectedCitiesActions.success, (state, {payload: {entity}}) => {
        return selectedCityAdapter.setOne({
            ...entity,
            callState: ELoadingState.LOADED
        }, state);
    }),
    on(selectedCitiesActions.failed, (state, {payload: {errorMsg}}) => ({
        ...state,
        callState: {errorMsg},
    })),
    // UPDATE
    on(selectedCitiesActions.update, (state, {payload: {entity}}) => {
        return selectedCityAdapter.updateOne({
            id: entity?.city?.id,
            changes: {
                callState: ELoadingState.LOADING
            }
        }, state);
    }),
    on(selectedCitiesActions.updateSuccess, (state, {payload: {entity}}) => {
        return selectedCityAdapter.updateOne({
            id: entity?.city?.id,
            changes: {
                ...entity,
                callState: ELoadingState.LOADED
            }
        }, state);
    }),
    on(selectedCitiesActions.updateFailed, (state, {payload: {errorMsg}}) => {
        return {
            ...state,
            callState: {errorMsg}
        }
    }),

    // REMOVE
    on(selectedCitiesActions.remove, (state, {payload: {entity}}) => {
        return selectedCityAdapter.removeOne(entity?.city?.id, state);
    }),
);

export const selectedCitiesReducer = function (state: ISelectedCityState | undefined, action: Action): ISelectedCityState {
    return reducer(state, action);
};