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
    registerDrone: builder.mutation({
      query: (data) => ({
        url: `${DRONE_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    loadMedication: builder.mutation({
      query: ({ id, data }) => ({
        url: `${DRONE_URL}/load-medication/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAvailableDronesQuery,
  useRegisterDroneMutation,
  useLoadMedicationMutation,
} = droneApi;
