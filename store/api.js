import { createAction } from "@reduxjs/toolkit";

// actions
export const apiRequest = createAction("api/request");
export const apiSuccess = createAction("api/success");
export const apiFailed = createAction("api/failed");
