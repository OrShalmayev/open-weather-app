import {ICityItem} from "../../modules/shared/models";
import {createHTTPActions} from "../../modules/@core/utility";
import {EFeatures} from "../../modules/@core/enums/features.enum";
import {CityWeather} from "../../modules/@pages/weather/models";

const [load, success, failed, clear] = createHTTPActions<{ query: string },
    { entity: CityWeather },
    { errorMsg: string }>(`[${EFeatures.SelectedCities}] Load`);

export const selectedCitiesActions = {
    load,
    success,
    failed,
    clear,
};