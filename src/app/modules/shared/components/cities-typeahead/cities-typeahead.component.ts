import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, takeUntil} from "rxjs/operators";
import {Store} from "@ngrx/store";

@Component({
    selector: 'app-cities-typeahead',
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
						*ngFor="let city of cities" [value]="city?.LocalizedName"
						(click)="doSearch()"
					>
						{{ city?.LocalizedName }}
					</mat-option>
				</mat-autocomplete>
				<app-error [HTMLType]="'MATERIAL'" [controlName]="searchControlWithAutocomplete"></app-error>
			</div>
		</div>
    `,
    styles: []
})
export class CitiesTypeaheadComponent implements OnInit {
    destroyed$: Subject<void> = new Subject<void>();
    searchControlWithAutocomplete!: FormControl;

    constructor(
        private store: Store
    ) {
    }

    ngOnInit(): void {
        this.initializeControl();
        this.handleValueChange();
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

                if (query?.length > 2) {
                    this.store.dispatch(fromCitiesAction.loadCities({query}));
                }
            });
    }

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
