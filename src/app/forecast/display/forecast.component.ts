import { Component, OnInit, AfterViewInit, Input } from '@angular/core';


import { map } from 'rxjs/operators'
import { Observable, Subscription } from 'rxjs';

// import { getCityTemperature } from '../store/stories/actions';
import { ForecastService } from './../service/forecast.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  x: any;
  // @ts-ignore
  forecastData$: Observable<any>;


  constructor(private forecastService: ForecastService) {

  }

  ngOnInit() {

    this.forecastService.initLocalData().subscribe(x => {
      this.x = x;
      this.getForecast(this.x?.city);

    });

  }


  getForecast(city: string) {
    this.forecastData$ = this.forecastService.getCityByTemperature(city)
  }




}
