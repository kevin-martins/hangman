import { useEffect, useState } from 'react'
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
import Shape from './Shape'
import Notification from './Notification'

const notificationTimer = () => {
  
}

const Game = (): JSX.Element => {
  const [timer, setTimer] = useState<any>()
  const [notification, setNotification] = useState<{ shown: boolean, message: string}>({ shown: false, message: ''})
  const wordProgression = useAppSelector(state => state.hangman.wordProgression)
  const wrongLetters = useAppSelector(state => state.hangman.wrongLetters)
  const difficulty = useAppSelector(state => state.hangman.difficulty)
  const playerTurn = useAppSelector(state => state.hangman.playerTurn)
  const { data = { word: '' }, isFetching } = useFetchWordsQuery(wordDifficulty(difficulty))
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isFetching) {
      dispatch(setWordProgression(progression(data.word)))
      dispatch(setPlayerTurn(true))
    }
  }, [isFetching])

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const { key, keyCode } = event
      if (keyCode >= 65 && keyCode <= 90) {
        const userInput: string = key.toLowerCase()
        if (data.word.includes(userInput)) {
          if (!correctLetters(wordProgression).includes(userInput))
            dispatch(setWordProgression(progression(data.word, userInput, correctLetters(wordProgression))))
          else {
            clearTimeout(timer)
            setNotification({ shown: true, message: `Letter '${userInput.toUpperCase()}' is correct but had already been used !` })
          }
        } else {
          if (!wrongLetters.includes(userInput))
            dispatch(setWrongLetter(userInput))
          else {
            clearTimeout(timer)
            setNotification({ shown: true, message: `Letter '${userInput.toUpperCase()}' is incorrect and had already been rejected !` })
          }
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

  useEffect(() => {
    setTimer(setTimeout(() => {
      setNotification({ shown: false, message: '' })
    }, 3000))
  }, [notification.shown])

  return (
    <div className='h-full'>
      {isFetching ? <Loading /> : 
      <>
        <Notification notification={notification} />
        <Points />
        <WrongLetters />
        <Shape />
        <DisplayWord />
        {/* <Button element="back" actions={[setGameState(GameState.MENU)]} /> */}
      </>
      }
    </div>
  )
}

export default Game
