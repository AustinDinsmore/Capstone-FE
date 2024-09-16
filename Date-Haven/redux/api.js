import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const dates_api = createApi({
    reducerPath: "dates_api",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://date-haven.onrender.com",
        baseUrl: "http://localhost:8080",
    }),
    tagTypes:["review", "comment"],
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
            }),
            providesTags: ["review", "comment"],
        }),
        createReview: builder.mutation ({
            query: ({body, id, token}) => ({
                url: `/api/review/${id}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body,
            })
        }),
        updateReview: builder.mutation ({
            query: ({body, id, token}) => ({
                url: `/api/review/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body,
            }),
            invalidatesTags: ["review"],
        }),
        deleteReview: builder.mutation ({
            query: ({id, token}) => ({
                url: `/api/review/${id}`,
                headers: {
                    authorization: `Bearer ${token}`,
                },
                method: "DELETE",
            }),
            invalidatesTags: ["review"],
        }),
        createComment: builder.mutation ({
            query: ({body, review_id, token}) => ({
                url: `/api/comment/${review_id}`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body,
            })
        }),
        updateComment: builder.mutation ({
            query: ({body, id, token}) => ({
                url: `/api/comment/${id}`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body,
            })
        }),
        deleteComment: builder.mutation({
            query: ({id, token}) => ({
                url: `/api/comment/${id}`,
                headers: {
                    authorization: `Bearer ${token}`,
                },
                method: "DELETE"
            })
        })
    })
})

export const {useRegisterMutation, useLoginMutation, useGetItemsQuery, useGetItemQuery, useCreateReviewMutation, useUpdateReviewMutation, useDeleteReviewMutation, useCreateCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation} = dates_api;