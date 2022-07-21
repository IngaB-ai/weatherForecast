import { environment } from '../../../environments/environment';
import { IForecastData } from '../models/forecastResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class ForecastService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve(): Observable<any> {
    return this.initLocalData();
 }

  /** GET forecast by city */
  getCityByTemperature(location: string): Observable<IForecastData> {
    return this.http.get<IForecastData>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${environment.keyAPI}&units=metric`)
   }

  initLocalData() {
    console.log("resolver works")
    return this.http.get<any>("https://geolocation-db.com/json")

  }

}