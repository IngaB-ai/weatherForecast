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

  allData: any;
  location = "";
  description: string = "";
  descriptionText: string = "";
  locationData: any;
  locationFeelsLike: number = 0;
  forecastData: any[] = [];
  // @ts-ignore
  courseObs: Observable<any>;
  subscription$: Subscription = Subscription.EMPTY;
  x: any = null;



  constructor(private forecastService: ForecastService) {

  }

  ngOnInit() {

    this.forecastService.initLocalData().subscribe(x => {
      this.x = x;
      this.getForecast(this.x?.city);

    });

  }


  getForecast(city: string) {

    this.subscription$ = this.forecastService.getCityByTemperature(city).subscribe((x: any) => {
      this.locationData = x;
      this.location = this.locationData?.name;
      this.description = this.locationData?.weather[0]?.main.toLowerCase();
      this.descriptionText = this.locationData?.weather[0]?.description;
      this.locationFeelsLike = this.locationData?.main?.feels_like;

    });

  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }


}
