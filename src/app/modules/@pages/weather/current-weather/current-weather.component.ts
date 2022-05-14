import {Component, Input, Output, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {selectedCitiesActions} from "../../../../state/selected-cities";
import {Store} from "@ngrx/store";
import {CityWeather} from "../models";
import {Subject} from "rxjs";

@Component({
    selector: 'current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent {
    destroyed$: Subject<void> = new Subject<void>();

    @Input('cityWeather') cityWeather!: CityWeather;

    constructor(
        private store: Store<any>,
    ) {
    }

    update(entity: any) {
        this.store.dispatch(selectedCitiesActions.update({entity}));
    }

    remove(entity: any) {
        this.store.dispatch(selectedCitiesActions.remove({entity}));
    }

    get cityName(): string {
        return `${this.cityWeather.city.name}, ${this.cityWeather.city.country}`;
    }

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
