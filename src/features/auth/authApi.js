import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../app/apiUrl";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http: //192.168.1.114" }),

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


export const { useUserLoginMutation } = authApi;