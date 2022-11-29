import { useEffect } from 'react'
import { setGameState, setPlayerTurn, setWordProgression, setWrongLetter } from '../features/hangman-slice'
import { useFetchWordsQuery } from '../features/words/word-api-slice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { correctLetters, progression, wordDifficulty } from '../helpers/helpers'
import { GameState } from '../models/game-state'
import WrongLetters from './WrongLetters'
import DisplayWord from './DisplayWord'
import Points from './Points'
import Button from './Button'
import Loading from './Loading'

const Game = (): JSX.Element => {
  const wordProgression = useAppSelector(state => state.hangman.wordProgression)
  const wrongLetters = useAppSelector(state => state.hangman.wrongLetters)
  const difficulty = useAppSelector(state => state.hangman.difficulty)
  const playerTurn = useAppSelector(state => state.hangman.playerTurn)
  const { data = [], isFetching } = useFetchWordsQuery(wordDifficulty(difficulty))
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isFetching) {
      dispatch(setWordProgression(progression(data[0])))
      dispatch(setPlayerTurn(true))
      console.log(data[0], playerTurn)
    }
  }, [isFetching])

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const { key, keyCode } = event
      if (keyCode >= 65 && keyCode <= 90) {
        const userInput: string = key.toLowerCase()
        if (data[0].includes(userInput)) {
          if (correctLetters(wordProgression))
            dispatch(setWordProgression(progression(data[0], userInput, correctLetters(wordProgression))))
          // else already used
        } else {
          if (!wrongLetters.includes(userInput))
            dispatch(setWrongLetter(userInput))
          // else already used
        }
      }
    }
    if (playerTurn) {
      dispatch(setPlayerTurn(false))
      window.addEventListener('keydown', handleKeyDown)
      dispatch(setPlayerTurn(true))
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [wordProgression, wrongLetters, playerTurn])

  return (
    <div className='h-full'>
      <Points />
      <WrongLetters />
      <DisplayWord />
      <Button element="back" actions={[setGameState(GameState.MENU)]} />
    </div>
  )
}

export default Game
