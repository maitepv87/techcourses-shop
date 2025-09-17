import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../thunks/coursesThunks";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = coursesSlice.actions;

export default coursesSlice.reducer;
