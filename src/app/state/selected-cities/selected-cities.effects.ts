import {Injectable} from "@angular/core";

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY, iif, of} from "rxjs";
import {catchError, map, mergeMap, switchMap, withLatestFrom} from "rxjs/operators";
import {CitiesService} from "../../modules/@core/backend/services/cities.service";
import {selectedCitiesActions} from "./selected-cities.actions";
import {WeatherService} from "../../modules/@core/backend/services";
import {CityWeather} from "../../modules/@pages/weather/models";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class SelectedCitiesEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private weatherService: WeatherService,
    ) {
    }

    loadCurrentWeather$ = createEffect(() => this.actions$
        .pipe(
            ofType(selectedCitiesActions.load),
            mergeMap(({payload: query}) => {
                return this.weatherService.getCityWeatherByQuery(query);
            }),
            catchError((err: HttpErrorResponse, caught$) => {
                this.store.dispatch(selectedCitiesActions.failed({errorMsg: err.message}));
                return EMPTY;
            }),
            map((entity: CityWeather) => selectedCitiesActions.success({entity})),
        ),
    );
}
