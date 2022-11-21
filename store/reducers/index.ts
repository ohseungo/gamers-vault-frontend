import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import HYDRATE from "next-redux-wrapper";
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      return combineReducers({
        user: userReducer,
      })(state, action);
  }
};

export default rootReducer;
