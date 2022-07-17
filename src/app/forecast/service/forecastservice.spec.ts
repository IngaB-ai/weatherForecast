import { Injectable } from "@angular/core";
import { ForecastService } from "./forecast.service";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
 
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

 
const DATA_ACCESS_PREFIX: string = `https://api.openweathermap.org/data/2.5/weather?q=vilnius&appid=${environment.keyAPI}&units=metric`;
 
@Injectable({
  providedIn: 'root'
})


export class DataAccessService {
  constructor(private client: HttpClient) {}
 
  getForecastForCityTest(): Observable<any> {
    return this.client.get<any>(`${DATA_ACCESS_PREFIX}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error retrieving forecast data. ${error.statusText || "Unknown"} `
        );
      })
    );
  }
 
  
}