import axios from 'axios';

const SECURELY_HIDDEN_VARIABLE = "2cc0fa9147b4cdf41c822e4a4ebca905";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = `FETCH_WEATHER`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
