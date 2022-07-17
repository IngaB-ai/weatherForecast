import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }


  /** GET forecast by city */
  getCityByTemperature(location: string): any {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${environment.keyAPI}&units=metric`)
   }

  initLocalData() {
    return this.http.get<any>("https://geolocation-db.com/json")

  }

}