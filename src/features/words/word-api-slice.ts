import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.api-ninjas.com/v1/randomword',
        prepareHeaders(headers) {
            headers.set('x-api-key', "3OWuTUoCOIKPSXixNdjAHQ==0QPsbU4mdPMtdc3X")
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchWords: builder.query<{ word: string }, number>({
                query(length) {
                    // return `/length=${length}`
                    return ''
                }
            })
        }
    }
})

export const { useFetchWordsQuery } = apiSlice
