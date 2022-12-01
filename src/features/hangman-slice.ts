import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { completeWord, generatePoints } from '../helpers/helpers'
import { DashboardProps } from '../models/dashboard'
import { DifficultyProps } from '../models/difficulty'
import { GameState } from '../models/game-state'
import { WinningState } from '../models/winner-state'
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
    word: string
    wordProgression: WordProgression[],
    wrongLetters: string[]
    correctLetters: string[]
    playerTurn: boolean
    winner: WinningState
    points: number
    dashboard: DashboardProps[]
}

const initialState: HangmanState = {
    gameState: GameState.MENU,
    difficulty: DifficultyProps.EASY,
    word: '',
    wordProgression: [],
    wrongLetters: [],
    correctLetters: [],
    playerTurn: false,
    winner: WinningState.NONE,
    points: 0,
    dashboard: [],
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
        setWord(state, action: PayloadAction<string>) {
            state.word = action.payload.toLowerCase()
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
        setCorrectLetters(state, action: PayloadAction<string>) {
            state.correctLetters.push(action.payload)
        },
        setWinnerState(state, action: PayloadAction<WinningState>) {
            state.winner = action.payload
        },
        setReset(state) {
            const points = generatePoints(state.wordProgression, state.difficulty, state.winner)
            if (WinningState.COMPUTER)
            state.dashboard.push({ word: completeWord(state.word, state.wordProgression), points: points })
            else
            state.dashboard.push({ word: state.wordProgression, points: points })
            state.wrongLetters = []
            state.wordProgression = []
            state.points += points
            state.playerTurn = true
            state.winner = WinningState.NONE
            state.word = ''
        }
    }
})

export const {
    setDifficulty,
    setGameState,
    setPlayerTurn,
    setWord,
    setWordProgression,
    setWrongLetter,
    setCorrectLetters,
    setWinnerState,
    setReset,
} = hangmanSlice.actions
export default hangmanSlice.reducer