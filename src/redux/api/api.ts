// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_API_ORIGIN = "http://127.0.0.1:7000";
export const API_URL = "http://127.0.0.1:7000/api";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({}),
});
