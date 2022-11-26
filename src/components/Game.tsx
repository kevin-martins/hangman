import { useEffect, useState } from "react"
import DisplayWord from "./DisplayWord"

const Game = () => {
    const [word, setWord] = useState<string>('  hello  ooo')
    const [userInput, setUserInput] = useState<string>('')

    // const currentWord = await fetch('https://random-word-api.herokuapp.com/word')
    // setWord(currentWord)
    return (
        <>
            <input type="text" value="" />
            <DisplayWord word={word.split('')} />
        </>
    )
}

export default Game
