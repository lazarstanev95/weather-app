import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather, getWeatherData } from './WeatherSlice';
import moment from 'moment';

export default function Weather() {
    const dispatch = useDispatch();
    const weather = useSelector(getWeatherData);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            if(lat.length !== 0 && long.length !== 0) {
                dispatch(getWeather(lat, long))
            }
        }
        fetchData();
        setInterval(() => {
            fetchData();
        }, 120000);
    }, [dispatch, lat, long]);

    const renderWeather = () => {
        return (
            weather.data &&
            <div style={{textAlign: 'center'}}>
                City Name: {weather.data.name} <br/>
                Temperatute: {weather.data.main.temp} &deg;C <br />
                Sunrise: {new Date(weather.data.sys.sunrise * 1000).toLocaleTimeString('en-IN')} <br />
                Sunset: {new Date(weather.data.sys.sunset * 1000).toLocaleTimeString('en-IN')} <br />
                Humidity: {weather.data.main.humidity} % <br />
                Day: {moment().format('dddd')} <br />
                Date: {moment().format('LL')}
            </div>
        )
    }
    return (
        <div>
            {renderWeather()}
        </div>
    )
}