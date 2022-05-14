import {TCityTypeaheadItems} from "../../modules/shared/components/cities-typeahead/models";
import {ELoadingState, TCallState} from "../../modules/@core/utility/state-management.helper";

export interface ICitiesState {
    cities: TCityTypeaheadItems;
    callState: TCallState,
}

export const citiesInitialState: ICitiesState = {
    cities: [],
    callState: ELoadingState.INIT,
};