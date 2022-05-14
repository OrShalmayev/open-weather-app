import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ICitiesState} from "./cities.types";
import {EFeatures} from "../../modules/@core/enums/features.enum";

export const selectCityState = createFeatureSelector<ICitiesState>(EFeatures.Cities);

export const selectCitiesState = createSelector(
    selectCityState,
    (citiesState: ICitiesState) => citiesState,
);

export const selectCitiesList = createSelector(
    selectCityState,
    (citiesState: ICitiesState) => citiesState?.cities,
);
