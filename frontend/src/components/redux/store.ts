import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    //acá agregamos los reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      false: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
