import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dashboard } from '../models/dashboard'
import { Difficulty } from '../models/difficulty'
import { GameState } from '../models/game-state'
import { WordProgression } from '../models/word-progression'

const dashboardExemple = [
    {
        word: [
            { letter: 'h', color: 'text-red-500'},
            { letter: 'e', color: 'text-green-500'},
            { letter: 'y', color: 'text-green-500'},
        ],
        points: 0,
    },
    {
        word: [
            { letter: 'd', color: 'text-red-500'},
            { letter: 'a', color: 'text-green-500'},
            { letter: 's', color: 'text-green-500'},
            { letter: 'h', color: 'text-green-500'},
            { letter: 'b', color: 'text-red-500'},
            { letter: 'o', color: 'text-green-500'},
            { letter: 'a', color: 'text-green-500'},
            { letter: 'r', color: 'text-green-500'},
            { letter: 'd', color: 'text-red-500'},
            { letter: 's', color: 'text-green-500'},
        ],
        points: 0,
    },
    {
        word: [
            { letter: 'l', color: 'text-green-500'},
            { letter: 'i', color: 'text-green-500'},
            { letter: 'm', color: 'text-green-500'},
            { letter: 'e', color: 'text-green-500'},
        ],
        points: 4,
    },
]

interface HangmanState {
    gameState: GameState
    difficulty: Difficulty
    word: string
    wordProgression: WordProgression[],
    dashboard: Dashboard[]
}

const initialState: HangmanState = {
    gameState: GameState.MENU,
    difficulty: Difficulty.EASY,
    word: '',
    wordProgression: [],
    dashboard: [...dashboardExemple, ...dashboardExemple, ...dashboardExemple, ...dashboardExemple],
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