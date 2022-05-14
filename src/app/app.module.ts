/**
 * Modules
 */
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

/**
 * Components
 */
import {AppComponent} from './app.component';
import {StateModule} from "./state/state.module";
import {HttpClientModule} from "@angular/common/http";

/**
 * Tokens
 */

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        StateModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
