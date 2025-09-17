import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCourses, fetchById } from "../../api/coursesAPI";

//
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, thunkAPI) => {
    try {
      const data = await fetchAllCourses();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//
export const fetchCourseById = createAsyncThunk(
  "courses/fetchCourseById",
  async (courseId, thunkAPI) => {
    try {
      const data = await fetchById(courseId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
