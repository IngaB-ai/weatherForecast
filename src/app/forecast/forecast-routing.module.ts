import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastComponent } from './display/forecast.component';
import { ForecastService } from './service/forecast.service';


const routes: Routes = [
  {
    path: '',
    component: ForecastComponent,
    resolve: {
      locationResolver: ForecastService
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], 
  providers: [ForecastService] 
})
export class ForecastRoutingModule { }