import {Component, Input} from '@angular/core';
import {AbstractControl, AbstractControlDirective} from '@angular/forms';

@Component({
    selector: 'app-error',
    template: `
		<ng-container [ngSwitch]="HTMLType">
			<ng-container *ngSwitchCase="'REGULAR'">
				<small class="text-danger" *ngFor="let errorMessage of listErrors(); let last=last;">
					{{last ? errorMessage : ''}}
				</small>
			</ng-container>
			<ng-container *ngSwitchCase="'MATERIAL'">
				<mat-error *ngFor="let errorMessage of listErrors(); let last=last;">
					{{last ? errorMessage : ''}}
				</mat-error>
			</ng-container>
		</ng-container>
    `,
    styles: []
})
export class ErrorComponent {

    constructor() {
    }

    errorMsgList: any = [];
    private _default: 'default' = 'default';

    @Input()
    controlName!: AbstractControl | AbstractControlDirective;
    @Input('HTMLType') HTMLType: 'REGULAR' | 'MATERIAL' = 'REGULAR';

    errorMessage: any = {
        [this._default]: (params: any) => "Invalid format",
        'required': (params: any) => "This field is required",
        'min': (params: { min: number, actual: number } | null) => "Minimum amount should be " + params?.min,
        'max': (params: { max: number, actual: number } | null) => "Maximum amount should be " + params?.max,
        'not_english_and_space': (params: any) => params?.message ?? "Only English letters are allowed.",
    };


    listErrors() {
        if (!this.controlName) return [];
        if (this.controlName.errors) {
            this.errorMsgList = [];
            Object.keys(this.controlName.errors).map(error => {
                if (!Object.keys(this.errorMessage).includes(error)) {
                    console.warn(`${error} didnt found at error component errorMessage object.\n setting error to default.`);
                    error = this._default;
                }
                this.controlName.touched || this.controlName.dirty
                    ?
                    this.errorMsgList.push(
                        //@ts-ignore
                        this.errorMessage[error](<AbstractControl>this.controlName.errors[error])
                    )
                    :
                    '';
            });
            return this.errorMsgList;
        } else {
            return [];
        }
    }
}
