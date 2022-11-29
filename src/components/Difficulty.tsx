// import { changeDifficulty, gameState } from "../app/store"
import { useAppSelector } from "../app/hooks"
import { setDifficulty, setGameState } from "../features/hangman-slice"
import { DifficultyProps } from "../models/difficulty"
import { GameState } from "../models/game-state"
import Button from "./Button"

const Difficulty = (): JSX.Element => {
    const difficulty = useAppSelector(state => state.hangman.difficulty)
    return (
        <>
            <Button
                element={DifficultyProps.EASY}
                actions={[setDifficulty(DifficultyProps.EASY), setGameState(GameState.MENU)]}
                isSelected={difficulty === DifficultyProps.EASY}
            />
            <Button
                element={DifficultyProps.CHALLENGING}
                actions={[setDifficulty(DifficultyProps.CHALLENGING), setGameState(GameState.MENU)]}
                isSelected={difficulty === DifficultyProps.CHALLENGING}
            />
            <Button
                element={DifficultyProps.HARD}
                actions={[setDifficulty(DifficultyProps.HARD), setGameState(GameState.MENU)]}
                isSelected={difficulty === DifficultyProps.HARD}
            />
            <Button
                element="back"
                actions={[setGameState(GameState.MENU)]}
            />
        </>
    )
}

export default Difficulty
