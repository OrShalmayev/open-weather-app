import {TCityItems} from "../../modules/shared/models";
import {ELoadingState, TCallState} from "../../modules/@core/utility/state-management.helper";

export interface ICitiesState {
    cities: TCityItems;
    callState: TCallState,
}

export const citiesInitialState: ICitiesState = {
    cities: [],
    callState: ELoadingState.INIT,
};