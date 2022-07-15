import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForecastService } from './service/forecast.service';
import { ForecastComponent } from './display/forecast.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ForecastRoutingModule } from './forecast-routing.module';



@NgModule({
  declarations: [
    ForecastComponent,
    SearchComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ForecastRoutingModule

  ],
  providers: [ForecastService],

})
export class ForeacastModule {
}


