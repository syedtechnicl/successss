import { configureStore } from "@reduxjs/toolkit";
import counterSlicerss from "./slicer";

export const store = configureStore({
  reducer: {
    counterSlicerss,
  },
});
