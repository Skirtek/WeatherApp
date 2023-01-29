import React, { useCallback, useEffect } from "react";
import { WeatherApi } from "../api/WeatherApi";
import { City } from "../models/City";

interface FutureWeatherProps {
  selectedCity: City | null;
}

export const FutureWeather = (props: FutureWeatherProps) => {
  return <div>{props.selectedCity?.name}</div>;
};
