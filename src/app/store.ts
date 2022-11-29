import { configureStore } from '@reduxjs/toolkit'
import hangmanReducer from '../features/hangman-slice'
import { apiSlice } from '../features/words/word-api-slice'

export const store = configureStore({
  reducer: {
    hangman: hangmanReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
