import { createSlice } from "@reduxjs/toolkit";
import { apiRequest } from "./api";

const slice = createSlice({
  name: "products",
  initialState: {
    index: [],
    show: {},
  },
  reducers: {
    loadIndex(state, { payload }) {
      state.index = payload;
    },
    loadShow(state, { payload }) {
      state.show = payload;
    },
  },
});

export const { loadIndex, loadShow } = slice.actions;
export default slice.reducer;

export const loadProducts = (page = 1) =>
  apiRequest({
    url: "products?_page=" + page,
    dispatchOnSuccess: loadIndex.type,
  });
