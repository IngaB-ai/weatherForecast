import { Forecast } from './index';
import { AppState } from '../index';


export function selectLocation(): (state: AppState) => Forecast[] {
    return (state: AppState) => {
        return state.blabla.locationsList;
    }
}