type Props = {
    letter: string
}

const DisplayLetter = ({ letter }: Props) => (
    <div
        className="relative bg-gray-800 sm:w-16 sm:h-16 w-10 h-10 rounded-lg"
    >
        <span className="absolute text-white sm:text-2xl right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2">
            {letter.toUpperCase()}
        </span>
    </div>
)

export default DisplayLetter
