import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../features/cocktail/cocktailApi";
import { productApi } from "../features/products/productApi";



export const store = configureStore({
  reducer: {
    [cocktailApi.reducerPath]: cocktailApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    cocktailApi.middleware,
    productApi.middleware
  ])
});