import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_SERVER_URL;

const baseQuery = fetchBaseQuery({ baseUrl });

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
