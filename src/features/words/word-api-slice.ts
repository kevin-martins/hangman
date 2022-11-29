import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Word = Array<string>

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://random-word-api.herokuapp.com'
    }),
    endpoints(builder) {
        return {
            fetchWords: builder.query<Word, number>({
                query(length) {
                    return `/word?length=${length}`
                }
            })
        }
    }
})

export const { useFetchWordsQuery } = apiSlice
