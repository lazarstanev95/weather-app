import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather, getWeatherData } from './WeatherSlice';
import WeatherCard from './WeatherCard';

export default function Weather() {
    const dispatch = useDispatch();
    const weather = useSelector(getWeatherData);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    const fetchData = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
        if(lat.length !== 0 && long.length !== 0) {
            dispatch(getWeather(lat, long))
        }
    }
    useEffect(() => {
        fetchData();
        setInterval(() => {
            fetchData();
        }, 120000);
    }, [dispatch, lat, long]);

    const renderWeather = () => {
        return (
            weather.data &&
            <WeatherCard 
                weather={weather.data}
                onClick={fetchData}
            />
        )
    }
    return (
        <div>
            {renderWeather()}
        </div>
    )
}