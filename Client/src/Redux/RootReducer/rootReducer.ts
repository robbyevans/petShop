// src/reducers/rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import petSlice from "../Slices/petSlice";

// If you add more slices, import them above and add them here.
const rootReducer = combineReducers({
  pets: petSlice,
  // other reducers go here...
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
