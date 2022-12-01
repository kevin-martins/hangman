import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setWinnerState } from '../features/hangman-slice'
import { checkPlayerVictory } from '../helpers/helpers'
import { WordProgression } from "../models/word-progression"

const DisplayWord = (): JSX.Element => {
    const wordProgression = useAppSelector(state => state.hangman.wordProgression)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setWinnerState(checkPlayerVictory(wordProgression)))
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
