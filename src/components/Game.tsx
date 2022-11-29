import { setGameState, setWordProgression } from '../features/hangman-slice'
import { useFetchWordsQuery } from '../features/words/word-api-slice'
import Button from './Button'
import Loading from './Loading'
import DisplayWord from './DisplayWord'
import { DifficultyProps } from '../models/difficulty'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { GameState } from '../models/game-state'


const wordDifficulty = (difficulty: DifficultyProps): number => {
  if (difficulty === DifficultyProps.EASY) return 6
  else if (difficulty === DifficultyProps.CHALLENGING) return 9
  return 10
}

const Game = (): JSX.Element => {
  const difficulty = useAppSelector(state => state.hangman.difficulty)
  const { data = [], isFetching } = useFetchWordsQuery(wordDifficulty(difficulty))

  const dispatch = useAppDispatch();
  if (!isFetching) {
    const progression = data[0].split('').map(() => { return { letter: '_', color: 'text-white' } })
    dispatch(setWordProgression(progression))
  }

  return (
    <div className='h-full'>
      <DisplayWord />
      <Button element="back" actions={[setGameState(GameState.MENU)]} />
    </div>
  )
}

export default Game
