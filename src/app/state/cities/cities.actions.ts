import {ICityItem} from "../../modules/shared/models";
import {createHTTPActions} from "../../modules/@core/utility";
import {EFeatures} from "../../modules/@core/enums/features.enum";

const [load, success, failed, clear] = createHTTPActions<
    { query: string },
    { cities: ICityItem[] },
    { errorMsg: string }
    >(`[${EFeatures.Cities}] Load`);

export const citiesActions = {
    load,
    success,
    failed,
    clear,
};