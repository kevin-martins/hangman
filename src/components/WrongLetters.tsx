import { useAppSelector } from "../app/hooks"

const WrongLetters = (): JSX.Element => {
    const wrongLetters = useAppSelector(state => state.hangman.wrongLetters)

    return (
        <div className="w-full text-white">
            <div className="w-44 ml-auto mr-40">
                <h2 className="text-left text-2xl pb-1 border-b-[.5px] border-white">Wrong letters</h2>
                <div className="flex flex-wrap text-xl mt-3 mx-3">
                    {wrongLetters.map((letter, i) => (
                        <span key={letter + i} className="px-[3px]">{letter}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WrongLetters
