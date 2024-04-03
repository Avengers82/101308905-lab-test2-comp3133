import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/launches`);
  }

  getMissionDetails(flightNumber: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/launches/${flightNumber}`);
  }
}
