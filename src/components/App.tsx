import { useAppDispatch, useAppSelector } from '../app/hooks'
import { GameState } from '../models/game-state';
import Center from './Center';
import Menu from './Menu';
import GameDifficulty from './GameDifficulty';
import Dashboard from './Dashboard';
import Game from './Game'
import Settings from './Settings';

const App = (): JSX.Element => {
  const gameState = useAppSelector(state => state.hangman.gameState)
  // useEffect(() => {
  //   const getWord = async (): Promise<void> => {
  //       await fetch('https://random-word-api.herokuapp.com/word')
  //           .then(res => res.json())
  //           .then(res => res.toString())
  //           .then(res => { console.log('word: ', res); setWord(res) })
  //   }
  //   getWord()
  // }, [])
  // console.log(gameState)

  return (
    <body>
      <Center>
        {gameState === GameState.MENU && <Menu />}
        {gameState === GameState.PLAY && <Game />}
        {gameState === GameState.DIFFICULTY_SELECTION && <GameDifficulty />}
        {gameState === GameState.DASHBOARD && <Dashboard />}
        {gameState === GameState.SETTINGS && <Settings />}
      </Center>
    </body>
  )
}

export default App;
