import React from 'react';
import moment from 'moment';
import styles from './Weather.module.css';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';

const WeatherCard = ({ weather, onClick }) => (
    <div className={styles.main}>
        <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#424242', borderRadius: 20}}>
            <p className={styles.header}>{weather.name}</p>
            <IconButton onClick={onClick}>
                <RefreshIcon color="secondary" fontSize="inherit" />
            </IconButton>
        </div>
        <div className={styles.flex}>
            <p className={styles.day}>{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            <p className={styles.description}>{weather.weather[0].main}</p>
        </div>

        <div className={styles.flex}>
            <p className={styles.temp}>Temperature: {weather.main.temp} &deg;C</p>
            <p className={styles.temp}>Humidity: {weather.main.humidity} %</p>
        </div>

        <div className={styles.flex}>
            <p className={styles.sunriseSunset}>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p className={styles.sunriseSunset}>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        </div>
    </div>
)

export default WeatherCard;