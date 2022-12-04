import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setKeyboard, setPlayerTurn, setWordProgression, setWrongLetter } from '../features/hangman-slice'
import { correctLetters, progression } from '../helpers/helpers'

const Keyboard = () => {
    const word = useAppSelector(state => state.hangman.word)
    const playerTurn = useAppSelector(state => state.hangman.playerTurn)
    const wrongLetters = useAppSelector(state => state.hangman.wrongLetters)
    const wordProgression = useAppSelector(state => state.hangman.wordProgression)
    const correct = correctLetters(wordProgression)
    const dispatch = useAppDispatch()


    const handleClick = (userInput: string): void => {
        if (playerTurn) {
            dispatch(setPlayerTurn(false))
            if (word.includes(userInput)) {
                if (!correctLetters(wordProgression).includes(userInput))
                    dispatch(setWordProgression(progression(word, userInput, correctLetters(wordProgression))))
            } else
                if (!wrongLetters.includes(userInput))
                    dispatch(setWrongLetter(userInput))
            dispatch(setPlayerTurn(true))
        }
    }

    return (
        <>
            <div
                className="flex flex-wrap gap-1 lg:text-3xl text-lg"
            >
                {"azertyuiopqsdfghjklmwxcvbn".split('').map((letter: string, i: number): JSX.Element => (
                    <button
                        key={letter + i}
                        onClick={() => handleClick(letter)}
                        className={`${correct.includes(letter) ? 'cursor-not-allowed bg-lime-500/80' : wrongLetters.includes(letter) ? 'bg-red-500/80' : 'bg-cyan-500'} 
                        sm:w-14 w-10 mx-auto cursor-not-allowed rounded-lg`}

                    >
                        <span className=''>{letter}</span>
                    </button>
                ))}
            </div>
        </>
    )
}

export default Keyboard
