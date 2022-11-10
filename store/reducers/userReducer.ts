import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  isLoggedIn: boolean;
  user?: User;
}

interface User {
  userName: string;
}

const initialState = {
  isLoggedIn: false,
  user: undefined,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    },
    logout(state) {
      return {
        ...state,
        user: undefined,
        isLoggedIn: false,
      };
    },
  },
});

export default userSlice.reducer;

export const { login, logout } = userSlice.actions;
