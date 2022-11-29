import { useAppSelector } from "../app/hooks"
import { WordProgression } from "../models/word-progression"

const DisplayWord = () => {
    const wordProgression = useAppSelector(state => state.hangman.wordProgression)

    return (
        <div
            className="flex flex-wrap gap-2 w-max mx-auto"
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
