export interface IForecastData {
  cord: ILongLat;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  rain: IRain;
  clouds: IClouds;
  dt: number;
  sys: ISys, 
  timezone: number,
  id: number,
  name: number,
  cod: number

}

export interface ILongLat {
  lon: number, 
  lat: number
}

export interface IWeather {
  id: number, 
  main: string, 
  descriptiom: string,
  icon: string
}

export interface IMain {
  temp: number, 
  feels_like: number, 
  temp_min: number,
  temp_max: number,
  pressure: number, 
  humidity: number
}

export interface IWind {
  speed: number, 
  deg: number
}

export interface IRain {
  "1h": number
}

export interface IClouds {
  all: number
}

export interface ISys {
  type: 2,
  id: number,
  country: string,
  sunrise: number,
  sunset: number
}
