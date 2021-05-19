import { createSlice, createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { apiRequest } from "./api";

const hydrate = createAction(HYDRATE);
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
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload[slice.name],
      };
    });
  },
});

export const { loadIndex, loadShow } = slice.actions;
export default slice.reducer;

export const loadProducts = (page = 10) =>
  apiRequest({
    url: "products?_limit=" + page,
    dispatchOnSuccess: loadIndex.type,
  });
