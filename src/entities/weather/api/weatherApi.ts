import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setWeather } from "../model/weatherSlice";
import { GeoResponse, WeatherResponse } from "../model/types";

const API_KEY = import.meta.env.VITE_APP_WEATHER_APP_API_KEY;
const baseUrl = import.meta.env.VITE_APP_WEATHER_BASE_URL;

const weatherApi = createApi({
    reducerPath: "weatheApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        getWeatherByCity: build.query<GeoResponse[], string>({
            query: (city) => `/geo/1.0/direct?q=${city}&appid=${API_KEY}`,
            // transformResponse: (response: any) => {
            //     // Если ответ — пустой массив, выбрасываем ошибку
            //     if (Array.isArray(response) && response.length === 0) {
            //         throw new Error("City not found");
            //     }
            //     return response;
            // },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (!data || data.length === 0) {
                        dispatch(setWeather(null));
                        throw new Error("City not found");
                    }
                    if (data && data.length > 0) {
                        const { lat, lon } = data[0];
                        const cityWeather = dispatch(
                            weatherApi.endpoints.getWeatherByCoordinates.initiate(
                                {
                                    lat,
                                    lon,
                                },
                            ),
                        );
                        const weather = await cityWeather.unwrap();
                        dispatch(setWeather(weather));
                    } else {
                        dispatch(setWeather(null));
                    }
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message);
                    } else {
                        console.error("Unknown error", e);
                    }
                }
            },
        }),
        getWeatherByCoordinates: build.query<
            WeatherResponse,
            { lat: number; lon: number }
        >({
            query: ({ lat, lon }) =>
                `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
        }),
    }),
});

export const { useLazyGetWeatherByCityQuery } = weatherApi;
export default weatherApi;
