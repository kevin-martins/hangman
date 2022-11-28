import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Difficulty } from '../models/difficulty'
import { GameState } from '../models/game-state'

interface HangmanState {
    gameState: GameState
    difficulty: Difficulty
}

const initialState: HangmanState = {
    gameState: GameState.MENU,
    difficulty: Difficulty.EASY

}

// const initialState: CounterState = {
//     word: '',
//     wordProgression: [],
//     points: 0,
//     difficulty: Difficulty.EASY,
//     hangmanProgress: 0,
//     gameState: GameState.MENU,
// }

const hangmanSlice = createSlice({
    name: 'hangman',
    initialState,
    reducers: {
        setDifficulty(state, action: PayloadAction<Difficulty>) {
            state.difficulty = action.payload
        },
        setGameState(state, action: PayloadAction<GameState>) {
            state.gameState = action.payload
        }
    }
})

export const { setDifficulty, setGameState } = hangmanSlice.actions
export default hangmanSlice.reducer