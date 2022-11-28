import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setGameState } from "../features/hangman-slice"
import { GameState } from "../models/game-state"
import Button from "./Button"

const Menu = () => {
    const difficulty = useAppSelector(state => state.hangman.difficulty)
    return (
        <>
            <Button element="Play" actions={[setGameState(GameState.PLAY)]} />
            <Button element={difficulty} actions={[setGameState(GameState.DIFFICULTY_SELECTION)]} />
            <Button element="Dashboard" actions={[setGameState(GameState.DASHBOARD)]} />
            <Button element="Settings" actions={[setGameState(GameState.SETTINGS)]} />
        </>
    )
}

export default Menu
