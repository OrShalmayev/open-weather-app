import {AbstractControl, ValidatorFn} from "@angular/forms";

const onlyEnglishAndSpaceRgx = /^[a-zA-Z\s]+$/;

export const onlyEnglishAndSpaceValidator = (): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: { message: string } } | null => {
        // if the value given is empty string then we return null because these fields are optional
        if (control.value === "") {
            return null;
        }
        if (!onlyEnglishAndSpaceRgx.test(control.value)) {
            return {
                not_english_and_space: {
                    message: "Only English letters are allowed.",
                }
            };
        }
        return null;
    };
};