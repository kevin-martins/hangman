import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DashboardProps } from '../models/dashboard'
import { DifficultyProps } from '../models/difficulty'
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
    difficulty: DifficultyProps
    wordProgression: WordProgression[],
    wrongLetters: string[]
    playerTurn: boolean
    points: number
    dashboard: DashboardProps[]
}

const initialState: HangmanState = {
    gameState: GameState.MENU,
    difficulty: DifficultyProps.EASY,
    wordProgression: [],
    wrongLetters: [],
    playerTurn: false,
    points: 0,
    dashboard: [...dashboardExemple, ...dashboardExemple, ...dashboardExemple, ...dashboardExemple],
}

const hangmanSlice = createSlice({
    name: 'hangman',
    initialState,
    reducers: {
        setDifficulty(state, action: PayloadAction<DifficultyProps>) {
            state.difficulty = action.payload
        },
        setGameState(state, action: PayloadAction<GameState>) {
            state.gameState = action.payload
        },
        setPlayerTurn(state, action: PayloadAction<boolean>) {
            state.playerTurn = action.payload
        },
        setWordProgression(state, action: PayloadAction<WordProgression[]>) {
            state.wordProgression = action.payload
        },
        setWrongLetter(state, action: PayloadAction<string>) {
            state.wrongLetters.push(action.payload)
        },
        clear(state, action: PayloadAction<DashboardProps>) {
            state.wrongLetters = []
            state.dashboard.push(action.payload)
            state.points += action.payload.points
        }
    }
})

export const {
    setDifficulty,
    setGameState,
    setPlayerTurn,
    setWordProgression,
    setWrongLetter,
    clear,
} = hangmanSlice.actions
export default hangmanSlice.reducer