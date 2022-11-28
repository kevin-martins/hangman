import { useAppDispatch, useAppSelector } from "../app/hooks"
import { Difficulty } from "../models/difficulties"
import '../styles/button.css'

type Props = {
	element: Difficulty | string
	actions: any[]
	selected?: boolean
}

const Button = ({ element, actions, selected = false }: Props) => {
	const difficulty = useAppSelector(state => state.hangman.difficulty)
	const dispatch = useAppDispatch();
	const setColor = (difficulty: number | string): string => {
		switch (difficulty) {
			case Difficulty.EASY: return 'text-lime-500'
			case Difficulty.CHALLENGING: return 'text-yellow-500'
			case Difficulty.HARD: return 'text-red-500'
			default: return 'text-white hover:text-black'
		}
	}

	const handleClick = () => {
		actions.forEach(action => {
			dispatch(action)
		})
	}

    return (
        <button className="mx-auto bg-gray-600" onClick={handleClick}>
			<span className="">
				<span
					data-attr-color='white'
					className={`${setColor(element)} ${selected && 'selected'} font-semibold z-10`}
				>
					{typeof element === "number" ? Difficulty[element] : element.toUpperCase()}
				</span>
			</span>
		</button>
    )
}

export default Button
