import { environment } from '../../../environments/environment';
import { IForecastData } from '../models/forecastResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ForecastService {

  constructor(private http: HttpClient) { }


  /** GET forecast by city */
  getCityByTemperature(location: string): Observable<IForecastData> {
    return this.http.get<IForecastData>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${environment.keyAPI}&units=metric`)
   }

  initLocalData() {
    return this.http.get<any>("https://geolocation-db.com/json")

  }

}