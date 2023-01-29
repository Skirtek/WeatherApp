import { weatherApi } from "../hooks/useAxios";

export class WeatherApi {
  static getFutureWeather = async (lat: number, lon: number) =>
    await weatherApi.get("/forecast", { params: { lat: lat, lon: lon } });
}
