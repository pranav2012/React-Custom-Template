import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";

import errorSlice from "./reducers/errorSlice";

export const store = configureStore({
  reducer: {
    error: errorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = useReduxDispatch;
