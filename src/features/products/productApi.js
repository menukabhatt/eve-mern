import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: '/products',

        method: 'GET'
      })
    }),
    getSearch: builder.query({
      query: (q) => ({
        url: '/products/search',
        params: {
          q: q
        },
        method: 'GET'
      })
    }),



  })



});


export const { useGetSearchQuery, useGetProductsQuery } = productApi;