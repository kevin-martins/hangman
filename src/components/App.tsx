import { useAppSelector } from '../app/hooks'
import { GameState } from '../models/game-state';
import Center from './Center';
import Menu from './Menu';
import Difficulty from './Difficulty';
import Dashboard from './Dashboard';
import Game from './Game'
import Settings from './Settings';

const App = (): JSX.Element => {
  const gameState = useAppSelector(state => state.hangman.gameState)

  return (
    <div className='bg-gray-700 h-screen'>
      {gameState === GameState.PLAY ?
        <Game /> :
        <Center>
          {gameState === GameState.MENU && <Menu />}
          {gameState === GameState.DIFFICULTY_SELECTION && <Difficulty />}
          {gameState === GameState.DASHBOARD && <Dashboard />}
          {gameState === GameState.SETTINGS && <Settings />}
        </Center>
      }
    </div>
  )
}

export default App;
