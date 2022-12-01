import { useAppSelector } from "../app/hooks"
import { setGameState } from "../features/hangman-slice"
import { GameState } from "../models/game-state"
import Button from "./Button"

const Menu = (): JSX.Element => {
  const difficulty = useAppSelector(state => state.hangman.difficulty)
  return (
    <>
      <h1 className="text-center text-6xl">Hangman</h1>
      <Button element="Play" actions={[setGameState(GameState.PLAY)]} />
      <Button element={difficulty} actions={[setGameState(GameState.DIFFICULTY_SELECTION)]} />
      <Button element="Dashboard" actions={[setGameState(GameState.DASHBOARD)]} />
      <Button element="Settings" actions={[setGameState(GameState.SETTINGS)]} />
    </>
  )
}

export default Menu
