import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../api';
import {EApiControllers} from "../../enums";
import {delay, map} from "rxjs/operators";
import {responseToCityWeather} from "../../utility/response/weather.response";
import {ELoadingState} from "../../utility/state-management.helper";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private httpService: HttpService) {
    }

    getCityWeatherByQuery(data: { query: string }): Observable<any> {
        const {query} = data;
        const params = new HttpParams({fromObject: {q: query}});

        return this.doGet({params})
            .pipe(map(response => responseToCityWeather(response, ELoadingState.INIT)));
    }

    private doGet<T>(data: { url?: string, params?: HttpParams }): Observable<T> {
        const url = data?.url || '';
        let params = data?.params || new HttpParams();
        params = params.append('units', 'metric');

        return this.httpService.get({endpoint: `${EApiControllers.weather}${url}`, params});
    }
}
