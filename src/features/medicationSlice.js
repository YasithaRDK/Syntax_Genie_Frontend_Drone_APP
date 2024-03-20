import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:5000" });

export const MEDICATION_URL = "/api/medications";

export const medicationApi = createApi({
  reducerPath: "medicationApi",
  baseQuery,
  tagType: ["medications"],
  endpoints: (builder) => ({
    getAllMedication: builder.query({
      query: () => ({
        url: `${MEDICATION_URL}`,
        method: "GET",
      }),
    }),
    registerMedication: builder.mutation({
      query: (data) => ({
        url: `${MEDICATION_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllMedicationQuery, useRegisterMedicationMutation } =
  medicationApi;