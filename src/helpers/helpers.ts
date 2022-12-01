import WrongLetters from "../components/WrongLetters"
import { DifficultyProps } from "../models/difficulty"
import { WinningState } from "../models/winner-state"
import { WordProgression } from "../models/word-progression"

export const capitalize = (word: string): string => {
  return word[0].toUpperCase() + word.split('').splice(1, word.length).join('').toLowerCase()
}

export const wordDifficulty = (difficulty: DifficultyProps): number => {
  if (difficulty === DifficultyProps.EASY) return 6
  else if (difficulty === DifficultyProps.CHALLENGING) return 9
  return 12
}

export const progression = (word: string, userInput: string = "_", correctLetters: string[] = []): WordProgression[] => {
  return word.split('').map((letter) => {
    if (letter === userInput || correctLetters.includes(letter)) 
      return { letter: letter, color: 'text-lime-500' }
    return { letter: "_", color: 'text-white' }
  })
}

export const correctLetters = (wordProgression: WordProgression[]): string[] => {
  return wordProgression.reduce((acc: string[], cur: WordProgression) => {
    if (cur.letter !== "_") acc.push(cur.letter)
    return acc
  }, [])
}

export const completeWord = (word: string, wordProgression: WordProgression[]): WordProgression[] => {
  return wordProgression.map((el: WordProgression, i: number) => {
    if (el.letter === "_") return { letter: word[i], color: 'text-red-500' }
    return el
  })
}

export const generatePoints = (wordProgression: WordProgression[], difficulty: DifficultyProps, winner: WinningState): number => {
  if (winner === WinningState.COMPUTER) return 0
  return wordProgression.reduce((acc: number, cur: WordProgression): number => {
    acc++
    return acc
  }, 0) * (difficulty + 1)
}

export const checkPlayerVictory = (wordProgression: WordProgression[]): WinningState => {
  console.log(wordProgression.every(el => el.letter !== "_"))
  if (wordProgression.every(el => el.letter !== "_")) return WinningState.PLAYER
  return WinningState.NONE
}

export const checkComputerVictory = (wrongLetters: number): WinningState => {
  if (wrongLetters >= 6) return WinningState.COMPUTER
  return WinningState.NONE
}