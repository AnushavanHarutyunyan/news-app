import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "@/entities/news/model/newsSlice";
import userReducer from "@/entities/user/model/userSlice";
import { newsApi } from "@/entities/news/api/newApi";
import userApi from "@/entities/user/api/userApi";

export const rootReducer = combineReducers({
    news: newsReducer,
    user: userReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
});
