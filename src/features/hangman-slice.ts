import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { completeWord, generatePoints } from '../helpers/helpers'
import { DashboardProps } from '../models/dashboard'
import { DifficultyProps } from '../models/difficulty'
import { GameState } from '../models/game-state'
import { WinningState } from '../models/winner-state'
import { WordProgression } from '../models/word-progression'

interface HangmanState {
    gameState: GameState
    difficulty: DifficultyProps
    word: string
    wordProgression: WordProgression[],
    wrongLetters: string[]
    playerTurn: boolean
    winner: WinningState
    points: number
    dashboard: DashboardProps[]
    soundVolume: number
}

const initialState: HangmanState = {
    gameState: GameState.MENU,
    difficulty: DifficultyProps.EASY,
    word: '',
    wordProgression: [],
    wrongLetters: [],
    playerTurn: false,
    winner: WinningState.NONE,
    points: 0,
    dashboard: [],
    soundVolume: 20,
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
        increaseSoundVolume(state) {
            if (state.soundVolume <= 95)
                state.soundVolume += 5
            else if (state.soundVolume > 100)
                state.soundVolume = 100
        },
        decreaseSoundVolume(state) {
            if (state.soundVolume >= 5)
                state.soundVolume -= 5
            else if (state.soundVolume < 0)
                state.soundVolume = 0
        },
        setPoints(state) {
            const points = generatePoints(state.word, state.difficulty)
            state.points += points
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
        setWinnerState(state, action: PayloadAction<WinningState>) {
            state.winner = action.payload
        },
        setReset(state) {
            const points = generatePoints(state.word, state.difficulty)
            if (state.winner === WinningState.PLAYER)
                state.dashboard.push({ word: state.wordProgression, points: points })
            else
                state.dashboard.push({ word: completeWord(state.word, state.wordProgression), points: 0 })
            state.wrongLetters = []
            state.wordProgression = []
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
    setPoints,
    setWordProgression,
    setWrongLetter,
    setWinnerState,
    increaseSoundVolume,
    decreaseSoundVolume,
    setReset,
} = hangmanSlice.actions
export default hangmanSlice.reducer