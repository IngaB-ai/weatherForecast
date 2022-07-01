import { APP_INIT } from "../actions";
import { getCityTemperature } from "./actions";

// @ts-ignore
export function forecastEffects(action, dispatch, getState): void {
    if (action.type === APP_INIT) {
        dispatch(getCityTemperature("barcelona"));
    }
}
