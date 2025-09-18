import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "", // success, error
  visible: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.visible = true;
    },
    hideNotification: (state) => {
      state.visible = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
