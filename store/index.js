import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import apiRequest from "./middlewares/apiRequest";
import { createWrapper } from "next-redux-wrapper";

import counter from "./counter";
import products from "./products";

export const makeStore = (context) => {
  const store = configureStore({
    reducer: {
      counter,
      products,
    },
    middleware: [...getDefaultMiddleware(), apiRequest],
  });

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
