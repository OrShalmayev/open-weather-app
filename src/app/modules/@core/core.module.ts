import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {throwIfAlreadyLoaded} from "./module-import-guard";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    exports: []
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule,
    ) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                // ...NB_CORE_PROVIDERS,
            ],
        };
    }
}
