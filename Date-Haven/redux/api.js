import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const dates_api = createApi({
    reducerPath: "dates_api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body) => ({
                url: "/auth/auth/register",
                method: "POST",
                body,
            }),
        }),
        login: builder.mutation({
            query: (body) => ({
                url: "/auth/auth/login",
                method: "POST",
                body,
            }),
        }),
        getItems: builder.query ({
            query: () => ({
                url: "/api/items/",
                method: "GET",
            })
        })
    })
})

export const {useRegisterMutation, useLoginMutation, useGetItemsQuery} = dates_api;