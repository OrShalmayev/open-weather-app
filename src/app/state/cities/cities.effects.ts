import {Injectable} from "@angular/core";

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY, iif, of} from "rxjs";
import {catchError, map, switchMap, withLatestFrom} from "rxjs/operators";
import {citiesActions} from './cities.actions';
import * as fromCitiesSelectors from './cities.selectors';
import {TCityTypeaheadItems} from "../../modules/shared/components/cities-typeahead/models";
import * as jsSearch from 'js-search';
import {ICitiesState} from "./cities.types";
import {CitiesService} from "../../modules/@core/backend/services/cities.service";

@Injectable()
export class CityEffect {
    constructor(
        private actions$: Actions,
        private store: Store<ICitiesState>,
        private cityService: CitiesService,
    ) {
    }

    loadCities$ = createEffect(() => this.actions$
        .pipe(
            ofType(citiesActions.load),
            withLatestFrom(this.store.select(fromCitiesSelectors.selectCitiesList)),
            switchMap(([{payload: {query}}, inStoreCities]) => {
                let citiesFound: TCityTypeaheadItems = [];
                if (inStoreCities?.length > 0) {
                    const search = new jsSearch.Search('geonameid');
                    search.addIndex('country');
                    search.addIndex('name');
                    search.addDocuments(inStoreCities);
                    citiesFound = search.search(query) as TCityTypeaheadItems;
                }
                return iif(() => citiesFound?.length > 0, of(citiesFound), this.cityService.getCities(query));
            }),
            catchError((err, caught$) => {
                this.store.dispatch(citiesActions.failed());
                return EMPTY;
            }),
            map((cities: TCityTypeaheadItems) => {
                return citiesActions.success({cities});
            }),
        ),
    );
}
