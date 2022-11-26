import { useEffect, useState } from "react"
import DisplayWord from "./DisplayWord"

const Game = () => {
    const [word, setWord] = useState<string>('')
    const [backendRes, setBackendRes] = useState('')
    // const [userInput, setUserInput] = useState<string>('')

    useEffect(() => {
        const getWord = async (): Promise<void> => {
            await fetch('https://random-word-api.herokuapp.com/word')
                .then(res => res.json())
                .then(res => res.toString())
                .then(res => { setWord(' '.repeat(res.length)); return res })
                .then(res => console.log(res))
        }
        getWord()
    }, [])

    console.log(word)

    return (
        <>
            {/* <input type="text" value="" /> */}
            <DisplayWord word={word.split('')} />
        </>
    )
}

export default Game
