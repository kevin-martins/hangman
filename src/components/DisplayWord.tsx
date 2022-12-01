import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setWinnerState } from '../features/hangman-slice'
import { checkPlayerVictory } from '../helpers/helpers'
import { WinningState } from '../models/winner-state'
import { WordProgression } from "../models/word-progression"
import { useSound } from 'use-sound'
import gameWon from '../assets/won.wav'

const DisplayWord = (): JSX.Element => {
    const soundVolume = useAppSelector(state => state.hangman.soundVolume) / 100
    const [playWon] = useSound(gameWon, { volume: soundVolume })
    const wordProgression = useAppSelector(state => state.hangman.wordProgression)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (checkPlayerVictory(wordProgression) === WinningState.PLAYER) {
            playWon()
            dispatch(setWinnerState(WinningState.PLAYER))
        }
    }, [wordProgression])

    return (
        <div
            className="flex flex-wrap gap-2 w-max absolute bottom-0 right-1/2 translate-x-1/2 mb-16 text-3xl"
        >
            {wordProgression.map((word: WordProgression, i: number): JSX.Element => (
                <span key={word.letter + i} className={word.color}>
                    {word.letter}
                </span>
            ))}
        </div>
    )
}

export default DisplayWord
