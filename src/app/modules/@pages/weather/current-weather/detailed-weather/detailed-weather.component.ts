import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {Weather} from "../../models";

@Component({
    selector: 'detailed-weather',
    templateUrl: './detailed-weather.component.html',
    styleUrls: ['./detailed-weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent {
    @Input('weather') weather!: Weather;

    get weatherIcon(): string {
        return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`;
    }
}