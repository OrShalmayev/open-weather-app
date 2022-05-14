import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {selectEntitiesToArray} from '../../../state/selected-cities/selected-cities.selectors';
import {map, takeUntil, tap, toArray} from "rxjs/operators";
import {selectedCitiesActions} from "../../../state/selected-cities";

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
    destroyed$: Subject<void> = new Subject<void>();
    selectedCities$!: Observable<any>;

    constructor(
        private store: Store<any>,
    ) {
    }

    ngOnInit(): void {
        this.handleGetByGeo();

        this.selectedCities$ = this.store.select(selectEntitiesToArray)
            .pipe(
                takeUntil(this.destroyed$)
            );
    }

    private handleGetByGeo() {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            this.store.dispatch(selectedCitiesActions.byGeo({latitude, longitude}));
        });
    }

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
