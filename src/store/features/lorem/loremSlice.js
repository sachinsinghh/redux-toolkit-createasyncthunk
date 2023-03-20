import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLorems = createAsyncThunk(
  "getLorems",
  async (argunment, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLorems.pending, (state, { payload }) => {
      state.loading = true;
    })
    builder.addCase(getLorems.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    })
    builder.addCase(getLorems.rejected, (state, action) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    })
  },
  
})

export default loremSlice;