import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.114' }),

  endpoints: (builder) => ({


    userLogin: builder.mutation({
      query: (q) => ({
        url: '/login',
        body: q,
        method: 'POST',

      })
    })



  })

});