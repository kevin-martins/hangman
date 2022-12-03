import { useEffect, useState } from 'react'
import { setGameState, setPlayerTurn, setWord, setWordProgression, setWrongLetter } from '../features/hangman-slice'
import { useFetchWordsQuery } from '../features/words/word-api-slice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { correctLetters, progression } from '../helpers/helpers'
import WrongLetters from '../components/WrongLetters'
import DisplayWord from '../components/DisplayWord'
import Points from '../components/Points'
import Loading from '../components/Loading'
import Shape from '../components/Shape'
import Notification from '../components/Notification'
import Restart from '../components/Restart'
import { WinningState } from '../models/winner-state'
import { GameState } from '../models/game-state'

const Game = (): JSX.Element => {
  const [timer, setTimer] = useState<any>()
  const [notification, setNotification] = useState<{ shown: boolean, message: string}>({ shown: false, message: ''})
  const wordProgression = useAppSelector(state => state.hangman.wordProgression)
  const wrongLetters = useAppSelector(state => state.hangman.wrongLetters)
  const playerTurn = useAppSelector(state => state.hangman.playerTurn)
  const winner = useAppSelector(state => state.hangman.winner)
  const difficulty = useAppSelector(state => state.hangman.difficulty)
  const gameState = useAppSelector(state => state.hangman.gameState)
  // const { data = { word: '' }, isFetching } = useFetchWordsQuery()
  const [isFetching, setIsFetching] = useState(true)
  const data = [
    ["bonjour", "animal", "licorne", "chanter", "classe", "canard", "arbre", "poisson"],
    ["classique", "atomique", "attraction", "combattant", "jongleur", "attaquer", "alcoolique"],
    ["incroyablement", "polykystique", "polycyclique", "chronophage", "hypoglycemie", "enturloupe", "abaissables"],
  ]
  const word = useAppSelector(state => state.hangman.word)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (gameState === GameState.RESTART) {
      setIsFetching(true)
      dispatch(setGameState(GameState.PLAY))
    }
  }, [gameState, winner])

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false)
    }, 800)
  }, [isFetching === true])

  useEffect(() => {
    if (!isFetching) {
      const randomWord = data[difficulty][Math.floor(Math.random() * data[difficulty].length)]
      // const randomWord = data.word
      dispatch(setWord(randomWord))
    }
  }, [isFetching])

  useEffect(() => {
    dispatch(setWordProgression(progression(word)))
    dispatch(setPlayerTurn(true))
  }, [word])

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
          if (!wrongLetters.includes(userInput)) {
            dispatch(setWrongLetter(userInput))
          } else {
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
    if (notification.shown === true) {
      setTimer(setTimeout(() => {
        setNotification({ shown: false, message: '' })
      }, 1500))
    }
  }, [notification.shown])

  return (
    <div className='bg-gray-700 h-screen'>
      {isFetching || gameState === GameState.RESTART ? <Loading /> : 
      <>
        <Points />
        <WrongLetters />
        <Shape />
        <DisplayWord />
        {notification.shown && <Notification message={notification.message} />}
        {winner !== WinningState.NONE && <Restart />}
      </>
      }
    </div>
  )
}

export default Game
