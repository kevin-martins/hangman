import { useAppSelector } from "../app/hooks"

const WrongLetters = (): JSX.Element => {
    const wrongLetters = useAppSelector(state => state.hangman.wrongLetters)

    return (
        <div className="sm:w-40 w-32 ml-auto mt-1 text-white">
            <h2 className="text-left text-lg sm:text-2xl pb-1 border-b-[.5px] border-white">Wrong letters</h2>
            <div className="flex flex-wrap text-xl mt-3">
                {wrongLetters.map((letter, i) => (
                    <span key={letter + i} className="px-[3px] text-red-500">{letter}</span>
                ))}
            </div>
        </div>
    )
}

export default WrongLetters
