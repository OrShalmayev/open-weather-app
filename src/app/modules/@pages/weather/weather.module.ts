import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared";
import {AllMaterialModule} from "../../material/material.module";
import {RouterModule} from "@angular/router";
import {WeatherComponent} from "./weather.component";

const ROUTES = [
    {path: '', component: WeatherComponent},
];

const EXPORTS: any[] = [
    WeatherComponent,
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
