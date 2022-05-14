import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {selectEntities} from '../../../state/selected-cities/selected-cities.selectors';
import {selectedCitiesActions} from "../../../state/selected-cities";
import {CityWeather} from "./models";

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
        this.selectedCities$ = this.store.select(selectEntities);
    }

    update(entity: any) {
        this.store.dispatch(selectedCitiesActions.update({entity}));
    }

    remove(entity: any) {
        this.store.dispatch(selectedCitiesActions.remove({entity}));
    }

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
