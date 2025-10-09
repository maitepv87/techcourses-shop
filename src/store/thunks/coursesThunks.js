import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCourses,
  getCourseById,
} from "../../features/courses/coursesAPI";

// Fetches all available courses from local JSON
export const fetchCourses = createAsyncThunk(
  "courseCatalog/fetchCourses",
  async (_, thunkAPI) => {
    try {
      const data = await getAllCourses();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetches a single course by ID
export const fetchCourseById = createAsyncThunk(
  "courseCatalog/fetchCourseById",
  async (courseId, thunkAPI) => {
    try {
      const data = await getCourseById(courseId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
