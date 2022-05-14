import { createAction, props } from '@ngrx/store';
import { CitiesResponse } from '../../models/cities.model';
import {ICityTypeaheadItem} from "../../components/cities-typeahead/models";

export const loadCities = createAction(
    '[Shared Cities] Load Cities',
    props<{ query: string }>(),
);
export const loadCitiesSuccess = createAction(
    '[Shared Cities] Load Cities Success',
    props<{ list: CitiesResponse[] }>(),
);
export const loadCitiesFailed = createAction(
    '[Shared Cities] Load Cities Failed',
);

const authApiActions = createActionGroup({
    source: '[Shared Cities]',
    events: {
        'Load Cities': props<{ query: string }>(),
        'Load Cities Success': props<{ cities: ICityTypeaheadItem[] }>(),
        // defining an event with payload using the props factory
        'Load Cities Failure': (error: Error) => ({ error }),
    },
});

export const clearCitiesState = createAction('[Shared City] Clear Cities State');