import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ICitiesState} from "./cities.types";
import {EFeatures} from "../../modules/@core/enums/features.enum";
import {ELoadingState} from "../../modules/@core/utility/state-management.helper";

export const selectCityState = createFeatureSelector<ICitiesState>(EFeatures.Cities);

export const selectCitiesState = createSelector(
    selectCityState,
    (citiesState: ICitiesState) => citiesState,
);

export const selectCitiesLoading = createSelector(
    selectCityState,
    (citiesState: ICitiesState) => citiesState.callState===ELoadingState.LOADING,
);

export const selectCitiesList = createSelector(
    selectCityState,
    (citiesState: ICitiesState) => citiesState?.cities,
);
