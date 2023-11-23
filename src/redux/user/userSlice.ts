import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user.types";

interface UserSliceStateProps {
  user: User | undefined;
  token: string | undefined;
}
const userStorage = localStorage.getItem("user");
const tokenStorage = localStorage.getItem("token");

const initialState: UserSliceStateProps = {
  user: userStorage ? JSON.parse(userStorage) : undefined,
  token: tokenStorage ? tokenStorage : undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify({ ...action.payload.user }));
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = undefined;
      localStorage.removeItem("user");
      state.token = undefined;
      localStorage.removeItem("token");
    },
  },
});

export default userSlice.reducer;

export const { setCredentials, logout } = userSlice.actions;

export const selectUser = (state: { user: UserSliceStateProps }) =>
  state.user.user;

export const selectToken = (state: { user: UserSliceStateProps }) =>
  state.user.token;
