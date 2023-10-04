// src/store.ts

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../RootReducer/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
