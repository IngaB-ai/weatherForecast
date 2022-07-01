import { combineReducers, createStore } from "redux";
import { forecastReducer, WeatherState } from "./stories";

export interface AppState {
    blabla: WeatherState;
}

export const appReducer = combineReducers<AppState>({
    blabla: forecastReducer,
  });
  
export const store = createStore(appReducer);