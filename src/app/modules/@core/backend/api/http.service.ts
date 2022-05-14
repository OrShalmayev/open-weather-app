import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {
    }

    get apiUrl(): string {
        return environment.apiURL;
    }

    get(data:{endpoint: string, options?: any, params?: HttpParams}): Observable<any>{
        const {endpoint} = data;
        const options:any = data?.options || {};

        const params:HttpParams = data?.params || new HttpParams();
        params.append('appid', environment.apiKey);

        return this.http.get(
            `${this.apiUrl}/${endpoint}`, 
            {...options, params}
        );
    }

    post<T>(endpoint: string, data: any, options?: any): Observable<any> {
        return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, options);
    }

    put<T>(endpoint: string, data: any, options?: any): Observable<any> {
        return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, options);
    }

    delete<T>(endpoint: string, options?: any): Observable<any> {
        return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, options);
    }
}