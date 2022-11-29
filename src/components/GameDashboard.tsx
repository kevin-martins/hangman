import { useAppSelector } from "../app/hooks"
import { setGameState } from "../features/hangman-slice"
import { Dashboard } from "../models/dashboard"
import { GameState } from "../models/game-state"
import { WordProgression } from "../models/word-progression"
import Button from "./Button"
import '../styles/dashboard-scrollbar.css'

const GameDashboard = (): JSX.Element => {
  const data = useAppSelector(state => state.hangman.dashboard)
  return (
    <>
      <div className="relative">
        <div className="h-72 overflow-auto mt-10 pr-3">
          <table className="w-full mb-2">
            <thead className="text-white/80">
              <tr>
                <th>
                  <span className="absolute w-1/2 left-0 top-0 border-b-[.5px] border-white">
                    Words
                  </span>
                </th>
                <th>
                  <span className="absolute w-1/2 left-1/2 pr-6 top-0 border-b-[.5px] border-white">
                    Points
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((dashboard: Dashboard, i: number) => (
                <tr
                  key={i + Date.now()}
                  className={`${i !== data.length - 1 && 'border-b-[.5px] border-white/20'} text-center text-white`}
                >
                  <td className="w-1/2">
                    {dashboard.word.map((word: WordProgression, i: number) => (
                      <span
                        key={i + Date.now()}
                        className={word.color}
                      >
                        {word.letter}
                      </span>
                    ))}
                  </td>
                  <td>{dashboard.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Button element="back" actions={[setGameState(GameState.MENU)]} />
    </>
  )
}

export default GameDashboard
