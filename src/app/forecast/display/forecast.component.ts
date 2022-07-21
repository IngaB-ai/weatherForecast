import { Component, OnInit, AfterViewInit, Input } from '@angular/core';


import { map } from 'rxjs/operators'
import { Observable, Subscription } from 'rxjs';

// import { getCityTemperature } from '../store/stories/actions';
import { ForecastService } from './../service/forecast.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  loading = true;
  localCity: any;
  // @ts-ignore
  forecastData$: Observable<any>;


  constructor(private forecastService: ForecastService, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.activeRoute.data.subscribe(data => {
      this.localCity = data.locationResolver;
      this.getForecast(this.localCity?.city);
    })
  }


  getForecast(city: string) {
    this.forecastData$ = this.forecastService.getCityByTemperature(city);
    this.loading = false;
  }




}
