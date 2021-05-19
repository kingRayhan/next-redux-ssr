import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import apiRequest from "./middlewares/apiRequest";
import { createWrapper } from "next-redux-wrapper";
import counter from "./counter";
import products from "./products";
import { useMemo } from "react";

const initStore = (context) =>
  configureStore({
    reducer: {
      counter,
      products,
    },
    middleware: [...getDefaultMiddleware(), apiRequest],
  });

export const wrapper = createWrapper(initStore, { debug: true });
