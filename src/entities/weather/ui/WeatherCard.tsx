import styles from "@/entities/weather/ui/weatherCard.module.css";
import { WeatherCardProps } from "../model/types";

export const WeatherCard = ({ cityWeather }: WeatherCardProps) => {
    return (
        <div className={styles.weather__info}>
            <h3>Weather Information</h3>
            <img
                src={`https://openweathermap.org/img/wn/${cityWeather.weather?.[0]?.icon}.png`}
            />
            <p>Name: {cityWeather.name}</p>
            <p>Temperature: {cityWeather.main.temp}°C</p>
            <p>Description: {cityWeather.weather?.[0]?.main}</p>
        </div>
    );
};
