import { useEffect, useState } from 'react'
import { setPlayerTurn, setWord, setWordProgression, setWrongLetter } from '../features/hangman-slice'
import { useFetchWordsQuery } from '../features/words/word-api-slice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { correctLetters, progression, wordDifficulty } from '../helpers/helpers'
import { GameState } from '../models/game-state'
import WrongLetters from './WrongLetters'
import DisplayWord from './DisplayWord'
import Points from './Points'
import Loading from './Loading'
import Shape from './Shape'
import Notification from './Notification'
import Restart from './Restart'

const Game = (): JSX.Element => {
  const [timer, setTimer] = useState<any>()
  const [notification, setNotification] = useState<{ shown: boolean, message: string}>({ shown: false, message: ''})
  const wordProgression = useAppSelector(state => state.hangman.wordProgression)
  const wrongLetters = useAppSelector(state => state.hangman.wrongLetters)
  const playerTurn = useAppSelector(state => state.hangman.playerTurn)
  const winner = useAppSelector(state => state.hangman.winner)
  // const { data = { word: '' }, isFetching } = useFetchWordsQuery(wordDifficulty(difficulty))
  const [isFetching, setIsFetching] = useState(true)
  const data = { word: "azeRty" }
  const word = useAppSelector(state => state.hangman.word)
  const gameState = useAppSelector(state => state.hangman.gameState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (gameState === GameState.RESTART)
      window.location.reload()
  }, [winner])

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false)
    }, 600)
  }, [])

  useEffect(() => {
    if (!isFetching) {
      dispatch(setWord(data.word))
      dispatch(setWordProgression(progression(data.word)))
      dispatch(setPlayerTurn(true))
    }
  }, [isFetching])

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const { key, keyCode } = event
      if (keyCode >= 65 && keyCode <= 90) {
        const userInput: string = key.toLowerCase()
        if (word.includes(userInput)) {
          if (!correctLetters(wordProgression).includes(userInput)) {
            dispatch(setWordProgression(progression(word, userInput, correctLetters(wordProgression))))
          } else {
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
    }, 2000))
  }, [notification.shown])

  return (
    <div className='bg-gray-700 h-screen'>
      {isFetching ? <Loading /> : 
      <>
        <Notification notification={notification} />
        <Points />
        <WrongLetters />
        <Shape />
        <DisplayWord />
        <Restart />
      </>
      }
    </div>
  )
}

export default Game
