import { configureStore } from "@reduxjs/toolkit";
import { droneApi } from "./droneSlice";
import { medicationApi } from "./medicationSlice";

const store = configureStore({
  reducer: {
    [droneApi.reducerPath]: droneApi.reducer,
    [medicationApi.reducerPath]: medicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      droneApi.middleware,
      medicationApi.middleware
    ),
});

export default store;
