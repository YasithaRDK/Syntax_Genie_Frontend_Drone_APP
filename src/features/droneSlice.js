import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:5000" });

export const DRONE_URL = "/api/drones";

export const droneApi = createApi({
  reducerPath: "droneApi",
  baseQuery,
  tagType: ["drones"],
  endpoints: (builder) => ({
    getAvailableDrones: builder.query({
      query: () => ({
        url: `${DRONE_URL}/available-drone`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAvailableDronesQuery } = droneApi;
