import axios from "axios";
import { apiFailed, apiRequest, apiSuccess } from "../api";

const ApiRequest = (store) => (next) => async (action) => {
  if (action.type !== apiRequest.type) return next(action);

  const { url, method, data, headers, dispatchOnSuccess, dispatchOnError } =
    action.payload;

  try {
    const respose = await axios.request({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      url,
      method,
      data,
      headers,
    });

    if (dispatchOnSuccess) {
      store.dispatch({ type: dispatchOnSuccess, payload: respose.data });
    } else {
      store.dispatch({ type: apiSuccess.type, payload: respose.data });
    }
  } catch (error) {
    if (dispatchOnError) {
      store.dispatch({ type: dispatchOnError, payload: error });
    } else {
      store.dispatch({ type: apiFailed.type, payload: error });
    }
  }
};

export default ApiRequest;
