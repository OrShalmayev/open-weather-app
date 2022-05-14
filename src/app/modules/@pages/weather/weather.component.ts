import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
    destroyed$: Subject<void> = new Subject<void>();

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
