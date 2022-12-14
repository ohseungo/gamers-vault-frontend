import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import HYDRATE from "next-redux-wrapper";
import postsReducer from "./postsReducer";
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return combineReducers({
        user: userReducer,
        posts: postsReducer,
      })(state, action);
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
