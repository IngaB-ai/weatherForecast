import { environment } from "src/environments/environment";
import { ForecastsActions } from ".";

export function getCityTemperature(location: string) {
    // @ts-ignore
    return async (dispatch, getState) => {


        const res = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${environment.keyAPI}&units=metric`, {

            method: 'GET'
        })).json();

        if (res.cod == 404) {
            return alert("wrong city name")

        }

        let modifiedResult = { name: res.name, main: res.main, weather: res.weather[0], wind: res.wind }
        dispatch({ type: ForecastsActions.SET_LOCAION_FORECAST, payload: modifiedResult })
    }
}
