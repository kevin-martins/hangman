import React from 'react'
import { setGameState } from '../features/hangman-slice'
import { GameState } from '../models/game-state'
import Button from './Button'

const Game = (): JSX.Element => {
  return (
    <div>
      <Button element="back" actions={[setGameState(GameState.MENU)]} />
    </div>
  )
}

export default Game
