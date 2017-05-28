import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Song }           from 'classes/song';


@Injectable()
export class BandSearchService {
constructor(private http: Http) {}
  search(term: string): Observable<Song[]> {
    return this.http
               .get(`app/songs/?name=${term}`)
               .map(response => response.json().data as Song[]);
  }
}