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
        <div className="h-72 overflow-auto">
          <table className="w-full mb-2">
            <thead className="border-[.5px] border-white text-white/80">
              <tr className="">
                <th className="border-[.5px] border-white">Words</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody className="border-[.5px] h-24 border-white">
              {data.map((dashboard: Dashboard, i: number) => (
                <tr
                  key={i + Date.now()}
                  className={`border-b-[.5px] ${i === data.length - 1 ? 'border-white' : 'border-white/20'} text-center text-white`}
                >
                  <td>
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
