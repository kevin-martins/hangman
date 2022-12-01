import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setWinnerState } from '../features/hangman-slice'
import { useSound } from 'use-sound'
import { checkComputerVictory, completeWord } from '../helpers/helpers'
import { WinningState } from '../models/winner-state'
import '../styles/shape.css'
import gameOver from '../assets/game-over.wav'

const Shape = () => {
  const soundVolume = useAppSelector(state => state.hangman.soundVolume) / 100
  const [playGameOver] = useSound(gameOver , { volume: soundVolume })
  const wrongLetters = useAppSelector(state => state.hangman.wrongLetters).length
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (checkComputerVictory(wrongLetters) === WinningState.COMPUTER) {
      playGameOver()
      dispatch(setWinnerState(WinningState.COMPUTER))
    }
  }, [wrongLetters])

  return (
    <svg height="250" width="200" className="absolute lg:top-32 sm:top-20 top-14 sm:left-20 lg:left-1/4">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {wrongLetters > 0 &&
        <circle cx="140" cy="70" r="20" />
      }
      {/* <!-- Body --> */}
      {wrongLetters > 1 &&
        <line x1="140" y1="90" x2="140" y2="150" />
      }
      {/* <!-- Arms --> */}
      {wrongLetters > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" />
      }
      {wrongLetters > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" />
      }
      {/* <!-- Legs --> */}
      {wrongLetters > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" />
      }
      {wrongLetters > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" />
      }
    </svg>
  )
}

export default Shape
