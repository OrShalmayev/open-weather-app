import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {FormControl, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged, takeUntil} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {citiesActions} from "../../../../state/cities/cities.actions";
import {TCityTypeaheadItems} from "./models";
import * as fromCitiesSelectors from '../../../../state/cities/cities.selectors';
import {onlyEnglishAndSpaceValidator} from "../../../@core/utility/validators";

@Component({
    selector: 'shared-cities-typeahead',
    template: `
		<div class="search-container mb-3">

			<div class="form-group">
				<input
					placeholder="Search city"
					type="text"
					matInput
					[formControl]="searchControlWithAutocomplete"
					[matAutocomplete]="auto"
				>
				<mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
					<mat-option
						*ngFor="let city of (cities$|async)" [value]="city?.name"
					>
						<!--						(click)="doSearch()"-->

						{{ city.name }}, {{city?.country}}
					</mat-option>
				</mat-autocomplete>
				<app-error [HTMLType]="'MATERIAL'" [controlName]="searchControlWithAutocomplete"></app-error>
			</div>
		</div>
    `,
    styles: []
})
export class CitiesTypeaheadComponent implements OnInit {
    private destroyed$: Subject<void> = new Subject<void>();
    searchControlWithAutocomplete!: FormControl;
    cities$!: Observable<TCityTypeaheadItems>;

    constructor(
        private store: Store
    ) {
    }

    ngOnInit(): void {
        this.initializeControl();
        this.handleValueChange();

        this.cities$ = this.store.select(fromCitiesSelectors.selectCitiesList);
    }


    private initializeControl() {
        this.searchControlWithAutocomplete = new FormControl(undefined, [Validators.required, Validators.min(3), onlyEnglishAndSpaceValidator()]);
    }

    private handleValueChange() {
        this.searchControlWithAutocomplete.valueChanges
            .pipe(
                debounceTime(500),
                distinctUntilChanged(),
                takeUntil(this.destroyed$)
            )
            .subscribe((query: any) => {
                if (!this.searchControlWithAutocomplete.valid) {
                    return;
                }

                this.store.dispatch(citiesActions.load({query}));
            });
    }

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
