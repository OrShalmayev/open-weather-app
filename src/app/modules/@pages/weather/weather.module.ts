import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared";
import {AllMaterialModule} from "../../material/material.module";
import {RouterModule} from "@angular/router";
import {WeatherComponent} from "./weather.component";
import {DetailedWeatherComponent} from "./detailed-weather/detailed-weather.component";
import {CurrentWeatherComponent} from "./current-weather/current-weather.component";

const ROUTES = [
    {path: '', component: WeatherComponent},
];

const EXPORTS: any[] = [
    WeatherComponent,
    CurrentWeatherComponent,
    DetailedWeatherComponent,
];

@NgModule({
    declarations: [
        ...EXPORTS,
    ],
    imports: [
        CommonModule,
        SharedModule,
        AllMaterialModule,
        RouterModule.forChild(ROUTES),
    ],
    exports: [...EXPORTS,]
})
export class WeatherModule {
}
