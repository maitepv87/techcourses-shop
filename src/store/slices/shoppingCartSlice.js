import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], //  Courses added to the cart [{ id, title, price, quantity }]
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

      const existingItem = state.cartItems.find(
        (item) => item.id === course.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...course, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.subTotal += course.price;
      state.total = state.subTotal;
    },
    removeFromCart: (state, action) => {
      const courseID = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === courseID
      );

      if (existingItemIndex !== -1) {
        const item = state.cartItems[existingItemIndex];
        state.totalQuantity -= item.quantity;
        state.subTotal -= item.price * item.quantity;

        state.cartItems.splice(existingItemIndex, 1);

        state.total = state.subTotal;
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.subTotal += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.subTotal -= item.price;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.subTotal = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
