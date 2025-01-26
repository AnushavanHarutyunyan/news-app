import { Button } from "@/shared/Button/Button";
import { useState } from "react";
import { useLazyGetWeatherByCityQuery } from "@/entities/weather/api/weatherApi";
import { selectWeather } from "@/entities/weather/model/weatherSlice";
import { useSelector } from "react-redux";
import { WeatherCard } from "@/entities/weather/ui/WeatherCard";
import styles from "./weather.module.css";

export const WeatherPage = () => {
    const [cityName, setCityName] = useState("");
    const [searchList, setSearchList] = useState<string[]>([]);
    const [getWeather, { isError, isLoading }] = useLazyGetWeatherByCityQuery();
    const cityWeather = useSelector(selectWeather);

    const handleClick = () => {
        getWeather(cityName);
        localStorage.setItem("city", cityName);
        setCityName("");
        setSearchList((prevHistory) => {
            if (prevHistory.length === 5) {
                prevHistory.pop();
            }
            return [cityName, ...prevHistory];
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cityNameofList = e.target.value;
        setCityName(cityNameofList);

        if (searchList.includes(cityNameofList)) {
            getWeather(cityNameofList);
            localStorage.setItem("city", cityNameofList);
            setCityName("");
        }
    };

    return (
        <section className={styles.weather__section}>
            <div className={styles.wrather__section_block}>
                <input
                    type="text"
                    list="searchList"
                    className={styles.wrather__section_input}
                    onInput={handleChange}
                    value={cityName}
                    placeholder="Enter city name"
                />
                <datalist id="searchList">
                    {searchList.map((query, indx) => (
                        <option
                            value={query}
                            key={indx}
                            onClick={() => console.log("asdf")}
                        />
                    ))}
                </datalist>
                <Button value="search" handleClick={handleClick} />
            </div>

            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching weather data.</p>}

            {cityWeather === null ? (
                <p>City not found</p>
            ) : (
                <WeatherCard cityWeather={cityWeather} />
            )}
        </section>
    );
};
