import axios from 'axios';

const API_KEY='c3955343a0622adc344a87aab2b10c4e';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER= 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},IN`;
    console.log(url);
    const request = axios.get(url);

    return{
        type : FETCH_WEATHER,
        payload : request
    };
}