import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, { payload }) {
      state++;
    },
    decrement(state, { payload }) {
      state--;
    },
  },
});

export const { increment, decrement } = slice.actions;
export default slice.reducer;
