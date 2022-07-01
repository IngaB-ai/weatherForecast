import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';

import { map } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { Forecast } from '../store/stories';
import { AppState } from '../store/index';
import { selectLocation } from '../store/stories/selectors';
import { getCityTemperature } from '../store/stories/actions';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  allData: any;
  description: string = "";
  descriptionText: string = "";
  location: string = "";
  locationData: any;
  locationFeelsLike: number = 0;
  forecastData: Forecast[] = [];
  subscription: Subscription = Subscription.EMPTY;
  // @ts-ignore
  form: FormGroup = FormGroup.EMPTY;





  constructor(private fb: FormBuilder, private ngRedux: NgRedux<AppState>) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['Barcelona']
    });

    this.subscription = this.ngRedux.select(selectLocation()).pipe(map((x: Forecast[]) => x.find(x => {
      return x.name.toLowerCase() === this.form.value.name.toLowerCase()
    }))).subscribe(x => {

      if (!x && !this.form.pristine) {
        return alert("wrongly typed name")
      }

      this.locationData = x;
      this.location = this.locationData?.name;
      this.description = this.locationData?.weather?.main;
      this.descriptionText = this.locationData?.weather?.description;
      this.locationFeelsLike = this.locationData?.main?.feels_like;
    }
    );
  }

  resetInput(){
    this.form.reset();
  }


  submit() {
    this.updateLocation();
  }

  updateLocation() {
    this.ngRedux.dispatch<any>(getCityTemperature(this.form.value.name));

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
