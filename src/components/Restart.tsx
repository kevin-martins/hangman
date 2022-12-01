import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setGameState, setPlayerTurn, setReset } from "../features/hangman-slice"
import { capitalize } from "../helpers/helpers"
import { GameState } from "../models/game-state"
import { WinningState } from "../models/winner-state"
import Button from "./Button"

export const Restart = (): JSX.Element => {
  const winner = useAppSelector(state => state.hangman.winner)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (winner === WinningState.COMPUTER || winner === WinningState.PLAYER)
      dispatch(setPlayerTurn(false))
  }, [winner])

  return (
    <>
      {winner !== WinningState.NONE && <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black/30 sm:w-96 w-72 h-60 z-50`}>
        <div className='flex flex-col gap-2 text-white mx-auto'>
          <h2 className='text-center text-2xl border-b-[.5px] border-white py-2 mx-10'>{capitalize(WinningState[winner])} won</h2>
          <Link to="/" className="mx-auto">
            <Button element="Dashboard" actions={[setReset(), setGameState(GameState.DASHBOARD)]} />
          </Link>
          <Button element="Menu" actions={[setReset(), setGameState(GameState.MENU)]} />
          <Button element="Restart" actions={[setReset(), setGameState(GameState.RESTART)]} />
        </div>
      </div>}
    </>
  )
}

export default Restart
