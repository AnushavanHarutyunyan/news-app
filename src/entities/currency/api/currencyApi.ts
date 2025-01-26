import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCurrency } from "../model/currencySlice";

const API_KEY = import.meta.env.VITE_APP_CURRENCY_APP_API_KEY;
const baseUrl = import.meta.env.VITE_APP_CURRENCY_APP_BASEURL;

export const currencyApi = createApi({
    reducerPath: "currencyApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ["Currency"],
    keepUnusedDataFor: 120,
    endpoints: (build) => ({
        getCurrency: build.query({
            query: (args) => {
                const currency = Object.values(args).join(",");
                return `/latest?access_key=${API_KEY}&symbols=${currency}`;
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCurrency(data));
                } catch (e) {
                    console.log(e, "Error currency f");
                }
            },
            providesTags: ["Currency"],
        }),
    }),
});

export const { useGetCurrencyQuery } = currencyApi;
export default currencyApi.reducer;
