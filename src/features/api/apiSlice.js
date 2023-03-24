import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const port = 5000;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${port}`,
  }),
  endpoints: (builder) => ({}),
})