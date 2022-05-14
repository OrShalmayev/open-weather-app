import {ISelectedCityState, selectedCityAdapter} from "./selected-cities.types";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EFeatures} from "../../modules/@core/enums/features.enum";

export const getSelectedCityState = createFeatureSelector<ISelectedCityState>(EFeatures.SelectedCities);

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal,
} = selectedCityAdapter.getSelectors(getSelectedCityState);