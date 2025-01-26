import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducers";
import { newsApi } from "@/entities/news/api/newApi";
import userApi from "@/entities/user/api/userApi";
import weatherApi from "@/entities/weather/api/weatherApi";
import { currencyApi } from "@/entities/currency/api/currencyApi";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) =>
        gDM().concat(
            newsApi.middleware,
            userApi.middleware,
            weatherApi.middleware,
            currencyApi.middleware,
        ),
});
