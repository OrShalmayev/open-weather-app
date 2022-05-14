import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICitiesState } from '..';
export const cityStoreName: "city" = "city";
export const selectCityState = createFeatureSelector<ICitiesState>(cityStoreName);

export const selectCitiesState = createSelector(
    selectCityState,
    (citiesState: ICitiesState) => citiesState,
);

export const selectCitiesList = createSelector(
    selectCityState,
    (citiesState: ICitiesState) => citiesState?.list,
);
