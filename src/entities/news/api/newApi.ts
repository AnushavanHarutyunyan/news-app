import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setNews } from "../model/newsSlice";

const API_KEY = "4261a6a99d0d4e0dacd25e2ea6cc6993";
const baseUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`;

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => baseUrl,
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const news = await queryFulfilled;
                const { articles } = news.data;
                dispatch(setNews(articles));
            },
        }),
    }),
});

export const { useGetNewsQuery } = newsApi;
