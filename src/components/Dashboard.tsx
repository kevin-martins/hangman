import { setGameState } from "../features/hangman-slice"
import { GameState } from "../models/game-state"
import Button from "./Button"

const Dashboard = (): JSX.Element => {
  return (
    <div>
      <></>
      <Button element="back" actions={[setGameState(GameState.MENU)]} />
    </div>
  )
}

export default Dashboard
