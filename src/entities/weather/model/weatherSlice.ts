import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherResponse, WeatherState } from "./types";

const initialState: WeatherState = {
    cityWeather: null,
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather: (state, action: PayloadAction<WeatherResponse | null>) => {
            state.cityWeather = action.payload;
        },
    },
    selectors: {
        selectWeather: (state) => state.cityWeather,
    },
});

export const selectWeather = (state: WeatherState) => state.cityWeather;
export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
