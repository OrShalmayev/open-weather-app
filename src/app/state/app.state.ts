import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {EFeatures} from "../modules/@core/enums/features.enum";
import {citiesReducer, ICitiesState} from "./cities";
import {ISelectedCityState, selectedCitiesReducer} from "./selected-cities";


export interface IAppState {
    router: RouterReducerState,
    [EFeatures.Cities]: ICitiesState,
    [EFeatures.SelectedCities]: ISelectedCityState
}

export const appReducer: any = {
    router: routerReducer,
    [EFeatures.Cities]: citiesReducer,
    [EFeatures.SelectedCities]: selectedCitiesReducer,
};
