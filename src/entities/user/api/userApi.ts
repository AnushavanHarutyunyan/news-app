import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../model/userSlice";

const API = "https://jsonplaceholder.typicode.com/users";

const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: (id) => `?${id}`,
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setUser(data));
            },
        }),
    }),
});

export const { useGetUserByIdQuery, } = userApi;
export default userApi;
