import { useSound } from 'use-sound'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { DifficultyProps } from "../models/difficulty"
import '../styles/button.css'
import soundHover from '../assets/button-hover.wav'
import soundClick from '../assets/button-click.wav'

type Props = {
	element: DifficultyProps | string
	actions: any[]
	isSelected?: boolean
}

const Button = ({ element, actions, isSelected = false }: Props): JSX.Element => {
	const soundVolume = useAppSelector(state => state.hangman.soundVolume) / 100
	const [playHover] = useSound(soundHover, { volume: soundVolume })
	const [playClick] = useSound(soundClick, { volume: soundVolume })
	const dispatch = useAppDispatch();
	const setColor = (difficulty: number | string): string => {
		switch (difficulty) {
			case DifficultyProps.EASY: return 'text-lime-500'
			case DifficultyProps.CHALLENGING: return 'text-yellow-500'
			case DifficultyProps.HARD: return 'text-red-500'
			default: return 'text-white hover:text-black'
		}
	}

	const handleClick = () => {
		playClick()
		actions.forEach(action => {
			dispatch(action)
		})
	}

    return (
        <button
			className="mx-auto bg-gray-600"
			onClick={handleClick}
			onMouseEnter={() => playHover()}
		>
			<span className="">
				<span
					data-attr-color='white'
					className={`${setColor(element)} ${isSelected && 'selected'} font-semibold z-10`}
				>
					{typeof element === "number" ? DifficultyProps[element] : element.toUpperCase()}
				</span>
			</span>
		</button>
    )
}

export default Button
