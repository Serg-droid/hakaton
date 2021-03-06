import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MapLoadService {

  constructor(
    private http: HttpClient
  ) { }

  getDistricts(): Observable<any> {
    return this.http.get('/assets/data/districts.json')
  }

  getPlaces(): Observable<any> {
    return this.http.get('/assets/data/places.json')
  }
}
