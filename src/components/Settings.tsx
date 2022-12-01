import { useSound } from 'use-sound'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decreaseSoundVolume, increaseSoundVolume, setGameState } from '../features/hangman-slice'
import { GameState } from '../models/game-state'
import Button from './Button'
import soundClick from '../assets/button-click.wav'

const Settings = (): JSX.Element => {
  const soundVolume = useAppSelector(state => state.hangman.soundVolume)
	const [playClick] = useSound(soundClick, { volume: soundVolume / 100 })
  const dispatch = useAppDispatch()

  const handleDecreaseVolume = () => {
    dispatch(decreaseSoundVolume())
    playClick()
  }

  const handleIncreaseVolume = () => {
    dispatch(increaseSoundVolume())
    playClick()
  }

  return (
    <>
      <div className='text-white mx-auto'>
        <p>button sound</p>
        <div className='flex mx-auto flex-row w-20'>
          <button type="button" className='text-2xl hover:text-3xl' onClick={handleDecreaseVolume}>-</button>
          <p className='text-2xl my-auto'>{soundVolume}</p>
          <button type="button" className='text-2xl hover:text-3xl' onClick={handleIncreaseVolume}>+</button>
        </div>
      </div>

      <Button element="back" actions={[setGameState(GameState.MENU)]} />
    </>
  )
}

export default Settings
