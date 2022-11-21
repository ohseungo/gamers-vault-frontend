import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development",
  });

const wrapper = createWrapper(makeStore);
export default wrapper;
