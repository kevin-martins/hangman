import { Counter } from '../features/counter/Counter'
import Game from './Game'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
      {/* <Navbar /> */}
      <body>
        <Game />
      </body>
    </div>
  );
}

export default App;
