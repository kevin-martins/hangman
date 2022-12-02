import { useAppSelector } from '../app/hooks'
import { GameState } from '../models/game-state';
import Center from '../components/Center';
import Menu from '../components/Menu';
import Difficulty from '../components/Difficulty';
import Dashboard from '../components/Dashboard';
import Settings from '../components/Settings';

const App = (): JSX.Element => {
  const gameState = useAppSelector(state => state.hangman.gameState)

  return (
    <div className='bg-gray-700 h-screen'>
      <Center>
        {gameState === GameState.MENU && <Menu />}
        {gameState === GameState.DIFFICULTY_SELECTION && <Difficulty />}
        {gameState === GameState.DASHBOARD && <Dashboard />}
        {gameState === GameState.SETTINGS && <Settings />}
      </Center>
    </div>
  )
}

export default App;
