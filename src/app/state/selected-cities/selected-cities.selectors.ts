import {ISelectedCityState, selectedCityAdapter} from "./selected-cities.types";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EFeatures} from "../../modules/@core/enums/features.enum";

export const selectState = createFeatureSelector<ISelectedCityState>(EFeatures.SelectedCities);

export const {
    selectAll ,
    selectEntities,
    selectIds,
    selectTotal,
} = selectedCityAdapter.getSelectors(selectState);

export const selectEntitiesToArray = createSelector(
    selectEntities,
    (entities) => {
        return Object.keys(entities).map(id => {
            return entities[id];
        });
    },
);
