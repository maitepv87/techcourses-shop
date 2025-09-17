import { configureStore } from "@reduxjs/toolkit";
import courseCatalogReducer from "./slices/courseCatalogSlice";
import shoppingCartReducer from "./slices/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    courseCatalog: courseCatalogReducer,
    shoppingCart: shoppingCartReducer,
  },
});
