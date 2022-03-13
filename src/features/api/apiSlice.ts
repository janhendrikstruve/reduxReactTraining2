import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/'}),
  endpoints: (builder) => ({
    getCharactersPage: builder.query({
      query: (page) => `?page=${page}`
    })
  })
})

export const { useGetCharactersPageQuery } = api