import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "@/entities/news/model/newsSlice";
import userReducer from "@/entities/user/model/userSlice";
import weatherReducer from "@/entities/weather/model/weatherSlice";
import { newsApi } from "@/entities/news/api/newApi";
import userApi from "@/entities/user/api/userApi";
import weatherApi from "@/entities/weather/api/weatherApi";
import currencyReducer from "@/entities/currency/model/currencySlice";
import { currencyApi } from "@/entities/currency/api/currencyApi";

export const rootReducer = combineReducers({
    news: newsReducer,
    user: userReducer,
    weather: weatherReducer,
    currency: currencyReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
});
