import {ICityItem} from "../../modules/shared/models";
import {createHTTPActions} from "../../modules/@core/utility";
import {EFeatures} from "../../modules/@core/enums/features.enum";
import {CityWeather} from "../../modules/@pages/weather/models";

const [load, success, failed, clear] = createHTTPActions<{ query: string },
    { entity: CityWeather },
    { errorMsg: string }>(`[${EFeatures.SelectedCities}] Load`);

const [byGeo, byGeoSuccess, byGeoFailed] = createHTTPActions<{ latitude:number, longitude:number },
    { entity: CityWeather },
    { errorMsg: string }>(`[${EFeatures.SelectedCities}] Load By GEO`);

const [update, updateSuccess, updateFailed] = createHTTPActions<{ entity: CityWeather },
    { entity: CityWeather },
    { errorMsg: string }>(`[${EFeatures.SelectedCities}] Update`);

const [remove, removeSuccess, removeFailed] = createHTTPActions<{ entity: CityWeather },
    { entity: CityWeather },
    { errorMsg: string }>(`[${EFeatures.SelectedCities}] Remove`);

export const selectedCitiesActions = {
    // LOAD
    load,
    success,
    failed,
    clear,
    // LOAD by geo
    byGeo,
    byGeoSuccess,
    byGeoFailed,
    // UPDATE
    update,
    updateSuccess,
    updateFailed,
    // REMOVE
    remove,
    removeSuccess,
    removeFailed,
};