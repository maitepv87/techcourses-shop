import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], //  Courses added to the cart [{ id, title, price, quantity }]
  totalQuantity: 0, // Total number of units (not unique courses)
  subTotal: 0, // Sum of item prices multiplied by quantity
  total: 0, // Final price
  status: "idle", // Status of async actions like checkout ('idle' | 'loading' | 'succeeded' | 'failed')
  error: null, // Error message if any cart-related action fails
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload;
      const existingItem = state.items.find((item) => item.id === course.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...course, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.subTotal += course.price;
      state.total = state.subTotal;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
