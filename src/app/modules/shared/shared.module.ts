/**
 * Modules
 */
import {ModuleWithProviders, NgModule} from "@angular/core";
import {NgLetDirective} from "./directives/";
import {CommonModule} from "@angular/common";
import {AllMaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

/**
 * Components
 */
import {
    CitiesTypeaheadComponent,
    ErrorComponent,
    RouteLoadingComponent,
    SharedSpinnerComponent,
    SharedSpinnerDirective
} from "./components";

/**
 * Pipes
 */
import {DefaultPipe} from "./pipes/default";

const COMPONENTS: any[] = [
    RouteLoadingComponent,
    NgLetDirective,
    SharedSpinnerComponent,
    ErrorComponent,
    CitiesTypeaheadComponent,
];
const DIRECTIVES: any[] = [
    SharedSpinnerDirective,
];
const PIPES: any[] = [
    DefaultPipe,
];
const MODULES: any[] = [CommonModule, FormsModule, ReactiveFormsModule, AllMaterialModule];
const EXPORTS: any[] = [];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES, ErrorComponent],
    imports: [...MODULES, ...EXPORTS],
    exports: [...MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVES, ...EXPORTS],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
        };
    }
}

