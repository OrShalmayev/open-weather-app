import {CityDailyWeather, CityWeather} from "../../../@pages/weather/models";
import {TCallState} from "../state-management.helper";

export function responseToCityWeather(response: any, callState: TCallState): CityWeather {
  return {
    callState: callState,
    city: {
      id: response.id,
      name: response.name,
      country: response.sys.country,
      coord: response.coord,
      timeZone: '',
    },
    weather: {
      id: response.weather[0].id,
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      temp: response.main.temp,
      minTemp: 0,
      maxTemp: 0,
      feelsLike: response.main.feels_like,
      humidity: response.main.humidity,
      wind: {
        speed: response.wind.speed,
        deg: response.wind.deg,
      },
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
    },
  }
}
