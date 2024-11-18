import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const cocktailApi = createApi({

  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1' }),

  endpoints: (builder) => ({


    cocktailCategory: builder.query({

      query: (q) => ({
        url: '/filter.php',
        params: {
          c: 'Cocktail'
        },

        method: 'GET'

      })

    }),

    searchCocktail: builder.query({

      query: (q) => ({
        url: '/search.php',
        params: {
          s: q
        },

        method: 'GET'

      })

    }),



  })






});

export const { useCocktailCategoryQuery, useLazySearchCocktailQuery, useSearchCocktailQuery } = cocktailApi;