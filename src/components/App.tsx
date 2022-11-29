import { useAppDispatch, useAppSelector } from '../app/hooks'
import { GameState } from '../models/game-state';
import Center from './Center';
import Menu from './Menu';
import GameDifficulty from './GameDifficulty';
import GameDashboard from './GameDashboard';
import Game from './Game'
import Settings from './Settings';

const App = (): JSX.Element => {
  const gameState = useAppSelector(state => state.hangman.gameState)

  return (
    <body>
      <Center>
        {gameState === GameState.MENU && <Menu />}
        {gameState === GameState.PLAY && <Game />}
        {gameState === GameState.DIFFICULTY_SELECTION && <GameDifficulty />}
        {gameState === GameState.DASHBOARD && <GameDashboard />}
        {gameState === GameState.SETTINGS && <Settings />}
      </Center>
    </body>
  )
}

export default App;
