import { configureStore } from "@reduxjs/toolkit";
import { api } from "./redux/api/api";
import userReducer from "./redux/user/userSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
