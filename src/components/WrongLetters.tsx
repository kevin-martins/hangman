import { useAppSelector } from "../app/hooks"

const WrongLetters = (): JSX.Element => {
    const wrongLetters = useAppSelector(state => state.hangman.wrongLetters)

    return (
        <div className="w-full text-white">
            <div className="sm:w-40 w-32 ml-auto lg:mr-40 md:mr-20 sm:mr-10 mr-3">
                <h2 className="text-left text-lg sm:text-2xl pb-1 border-b-[.5px] border-white">Wrong letters</h2>
                <div className="flex flex-wrap text-xl mt-3 mx-3">
                    {wrongLetters.map((letter, i) => (
                        <span key={letter + i} className="px-[3px] text-red-500">{letter}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WrongLetters
