import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slices/coursesSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    cart: cartReducer,
  },
});
