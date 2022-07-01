import { Action } from "redux";

export interface WeatherState {
    locationsList: []
}

export interface Forecast {  
    name: string, 
    main: {
        feels_like?: number, 
        humidity? : number, 
        pressure?: number, 
        temp: number, 
        temp_max: number, 
        temp_min: number,
    }, 
    weather: Weather, 
    wind: {
        deg: number, 
        speed: number
    }
}

export interface Weather {
    description: string, 
    icon: string, 
    id: number, 
    main:string
}

export const initialForecastState: WeatherState = {
    locationsList: []
}

export interface ForecastAction extends Action {
    payload: any;
}

export const ForecastsActions = {
    SET_LOCAION_FORECAST: Symbol('Forecast/Set single forecast'),
};

   export function forecastReducer(state: WeatherState = initialForecastState, action: ForecastAction ): WeatherState{
    switch (action.type) {
        case ForecastsActions.SET_LOCAION_FORECAST: {
            let locations: Forecast[] = [ ...state.locationsList ];
            const location: Forecast | undefined = locations.find((forecast:any) => {
               return forecast.name === action.payload.name});
                
            if(!location){
                let s = action.payload;
                locations.push(s as Forecast);
                
            }
            //@ts-ignore
            return { ...state, locationsList: locations};
        }
        default:
            return state;
    }
}
