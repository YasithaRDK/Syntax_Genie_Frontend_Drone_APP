import { configureStore } from "@reduxjs/toolkit";
import { droneApi } from "./droneSlice";

const store = configureStore({
  reducer: {
    [droneApi.reducerPath]: droneApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(droneApi.middleware),
});

export default store;
