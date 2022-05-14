import { HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../api';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private readonly controllerApi:string = "weather";

    constructor(private httpService:HttpService) { }

    getCityWeatherByName(data:{query:string}):Observable<any> {
        const {query} = data;
        const params = new HttpParams({ fromObject: { q: query } });

        return this.doGet({params});
    }

    private doGet<T>(data:{url?: string, params?: HttpParams}): Observable<T> {
        const url = data?.url || '';
        const params = data?.params || new HttpParams();
        
        return this.httpService.get({endpoint:`${this.controllerApi}${ url }`, params});
    }
}
