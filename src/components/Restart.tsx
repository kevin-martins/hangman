import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setGameState, setPlayerTurn, setReset, setWinnerState } from "../features/hangman-slice"
import { capitalize } from "../helpers/helpers"
import { GameState } from "../models/game-state"
import { WinningState } from "../models/winner-state"
import Button from "./Button"

export const Restart = (): JSX.Element => {
  const winner = useAppSelector(state => state.hangman.winner)
  const word = useAppSelector(state => state.hangman.word)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (winner === WinningState.COMPUTER || winner === WinningState.PLAYER)
      dispatch(setPlayerTurn(false))
  }, [winner])

  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black/30 sm:w-96 w-72 pb-3 z-50`}>
      <div className='flex flex-col gap-2 text-white mx-auto'>
        <h2 className='text-center text-2xl border-b-[.5px] border-white py-2 mx-10'>{capitalize(WinningState[winner])} won</h2>
        {winner === WinningState.COMPUTER && <p className='text-center'>the word was: {word}</p>}
        <Button element="Dashboard" actions={[setReset(), setGameState(GameState.DASHBOARD)]} />
        <Button element="Menu" actions={[setReset(), setGameState(GameState.MENU)]} />
        <Button element="Restart" actions={[setReset(), setGameState(GameState.RESTART)]} />
      </div>
    </div>
  )
}

export default Restart
