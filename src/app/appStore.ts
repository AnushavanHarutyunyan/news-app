import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducers";
import { newsApi } from "@/entities/news/api/newApi";
import userApi from "@/entities/user/api/userApi";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(newsApi.middleware, userApi.middleware),
});
