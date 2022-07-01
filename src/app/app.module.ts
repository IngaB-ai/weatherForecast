import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import thunk from 'redux-thunk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { appReducer, AppState } from './store';
import { createEffectsMiddleware } from './store/middleware';
import { forecastEffects } from './store/stories/effects';
import { AppInitAction } from './store/actions';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    NgReduxModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    ngRedux: NgRedux<AppState>,
  ) {

    let enhancer: any = [];
    if (typeof window !== 'undefined') {
      const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
      if (reduxDevTools !== undefined) {
        enhancer = [...enhancer, reduxDevTools({ serialize: true })];
      }
    }

    let initState: AppState = { blabla: { locationsList: []}};
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('blabla')) {
      // @ts-ignore
      initState = {blabla: JSON.parse(sessionStorage.getItem('blabla'))};
    }

    ngRedux.configureStore(appReducer, initState, [ thunk, createEffectsMiddleware([ forecastEffects ])], enhancer);
    ngRedux.dispatch(AppInitAction());

    ngRedux.subscribe(() => {
      const statehasChanged = JSON.stringify(ngRedux.getState().blabla) !== sessionStorage.getItem('blabla');
      console.log("status has changed")
      if (statehasChanged) {
        sessionStorage.setItem('blabla', JSON.stringify(ngRedux.getState().blabla));
      }
    });
  }
}
