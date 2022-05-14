import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {selectEntities} from '../../../state/selected-cities/selected-cities.selectors'
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

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
