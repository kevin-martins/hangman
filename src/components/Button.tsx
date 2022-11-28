import { useSelector } from "react-redux"
import { DifficultyProps } from "../features/hangmanSlice"
import '../styles/button.css'


type Props = {
	text: DifficultyProps
}

const Button = ({ text }: Props) => {
	const setColor = (difficulty: number) => {
		switch (difficulty) {
			case DifficultyProps.EASY:
				return 'text-green-500'
			case DifficultyProps.CHALLENGING:
				return 'text-yellow-500'
			case DifficultyProps.HARD:
				return 'text-red-500'
			case DifficultyProps.EXTREME:
				return 'text-gray-800'
			default:
				break
		}
	}
    return (
        <button className="mx-auto bg-gray-600">
			<span className="">
				<span
					data-attr-color='white'
					className={`${setColor(text)} font-semibold z-10`}
				>
					{DifficultyProps[text]}
				</span>
			</span>
		</button>
    )
}

export default Button
