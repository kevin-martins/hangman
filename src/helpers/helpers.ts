import { DifficultyProps } from "../models/difficulty"
import { WordProgression } from "../models/word-progression"

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
    return { ...el }
  })
}