// import { changeDifficulty, gameState } from "../app/store"
import { useAppSelector } from "../app/hooks"
import { setDifficulty, setGameState } from "../features/hangman-slice"
import { Difficulty } from "../models/difficulty"
import { GameState } from "../models/game-state"
import Button from "./Button"

const GameDifficulty = (): JSX.Element => {
    const difficulty = useAppSelector(state => state.hangman.difficulty)
    return (
        <>
            <Button
                element={Difficulty.EASY}
                actions={[setDifficulty(Difficulty.EASY), setGameState(GameState.MENU)]}
                isSelected={difficulty === Difficulty.EASY}
            />
            <Button
                element={Difficulty.CHALLENGING}
                actions={[setDifficulty(Difficulty.CHALLENGING), setGameState(GameState.MENU)]}
                isSelected={difficulty === Difficulty.CHALLENGING}
            />
            <Button
                element={Difficulty.HARD}
                actions={[setDifficulty(Difficulty.HARD), setGameState(GameState.MENU)]}
                isSelected={difficulty === Difficulty.HARD}
            />
            <Button
                element="back"
                actions={[setGameState(GameState.MENU)]}
            />
        </>
    )
}

export default GameDifficulty
