import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {EFeatures} from "../modules/@core/enums/features.enum";
import {citiesReducer, ICitiesState} from "./cities";


export interface IAppState {
    router: RouterReducerState,
    [EFeatures.Cities]: ICitiesState,
}

export const appReducer: any = {
    router: routerReducer,
    [EFeatures.Cities]: citiesReducer,
};
