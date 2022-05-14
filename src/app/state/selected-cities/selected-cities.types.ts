import {ICityItem} from "../../modules/shared/models";
import {ELoadingState, TCallState} from "../../modules/@core/utility/state-management.helper";
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {CityWeather} from "../../modules/@pages/weather/models";

export const selectedCityAdapter = createEntityAdapter<CityWeather>();

export interface ISelectedCityState extends EntityState<CityWeather>{
    callState: TCallState,
}

export const selectedCityInitialState: ISelectedCityState = selectedCityAdapter.getInitialState({
    callState: ELoadingState.INIT
});