import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../thunks/coursesThunks";

const initialState = {
  courses: [],
  status: "idle",
  error: null,
};

export const courseCatalogSlice = createSlice({
  name: "courseCatalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = courseCatalogSlice.actions;

export default courseCatalogSlice.reducer;
