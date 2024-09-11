import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const dates_api = createApi({
    reducerPath: "dates_api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://date-haven.onrender.com",
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
        }),
        getItem: builder.query ({
            query: (id) => ({
                url: `/api/items/${id}`,
                method: "GET",
            })
        }),
        createReview: builder.mutation ({
            query: ({body, id}) => ({
                url: `/api/review/${id}`,
                method: "POST",
                body,
            })
        }),
        updateReview: builder.mutation ({
            query: ({body, id}) => ({
                url: `/api/review/${id}`,
                method: "PUT",
                body,
            })
        }),
        deleteReview: builder.mutation ({
            query: (id) => ({
                url: `/api/review/${id}`,
                method: "DELETE",
            })
        }),
        createComment: builder.mutation ({
            query: ({body, id}) => ({
                url: `/api/comment/${id}`,
                method: "POST",
                body,
            })
        }),
        updateComment: builder.mutation ({
            query: ({body, id}) => ({
                url: `/api/comment/${id}`,
                method: "PUT",
                body,
            })
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/api/comment/${id}`,
                method: "DELETE"
            })
        })
    })
})

export const {useRegisterMutation, useLoginMutation, useGetItemsQuery, useGetItemQuery, useCreateReviewMutation, useUpdateReviewMutation, useDeleteReviewMutation, useCreateCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation} = dates_api;