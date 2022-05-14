import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as jsSearch from 'js-search';
import {ICityTypeaheadItem} from "../../../shared/components/cities-typeahead/models";

@Injectable()
export class CitiesService {

    constructor(private http: HttpClient) {
    }

    getCities(query: string): Observable<ICityTypeaheadItem[]> {
        return this.http.get<{ country: string }[]>('assets/db/cities.json')
            .pipe(
                map(cities => {
                    const search = new jsSearch.Search('country');
                    search.addIndex('country');
                    search.addIndex('name');
                    search.addDocuments(cities);
                    return search.search(query);
                }),
            );
    }
}
