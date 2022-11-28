import { configureStore } from '@reduxjs/toolkit'
import produce from 'immer'
import { WordProgression } from '../models/word-progression'
import { Difficulty } from '../models/difficulty'
import { GameState } from '../models/game-state'
import hangmanReducer from '../features/hangman-slice'

export const store = configureStore({
  reducer: {
    hangman: hangmanReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// type CounterState = {
//   word: string
//   wordProgression: Array<WordProgression>
//   points: number
//   difficulty: Difficulty
//   hangmanProgress: number
//   gameState: GameState
// }

// const initialState: CounterState = {
//   word: '',
//   wordProgression: [],
//   points: 0,
//   difficulty: Difficulty.EASY,
//   hangmanProgress: 0,
//   gameState: GameState.MENU,
// }

// export const changeDifficulty = (difficulty: Difficulty) => ({
//   type: `change difficulty to: ${Difficulty[difficulty]}`,
//   payload: { difficulty: difficulty },
// })

// export const gameState = (state: GameState) => ({
//   type: `change game page to: ${GameState[state]}`,
//   payload: { difficulty: state },
// })

// const reducer = (state = initialState, action: any) => {
//   if (action.type === Difficulty.EASY)
//     return produce(state, draft => {
//       draft.difficulty = Difficulty.EASY
//     })
//   else if (action.type === Difficulty.CHALLENGING)
//     return produce(state, draft => {
//       draft.difficulty = Difficulty.CHALLENGING
//     })
//   else if (action.type === Difficulty.HARD)
//     return produce(state, draft => {
//       draft.difficulty = Difficulty.HARD
//     })
//   return state
// }

// export const store = configureStore({
//   reducer: {
//     hangman: 
//   }
// });

// store.subscribe(() => {
//   console.log("Nouveau state:");
//   console.log(store.getState());
// });
