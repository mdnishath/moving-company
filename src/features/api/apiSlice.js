import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// console.log(process.env.REACT_APP_API_URL);
// creating apislice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT__APP_API_URL,
    baseUrl: "localhost:9000",
  }),
  endpoints: (builder) => ({}),
});
