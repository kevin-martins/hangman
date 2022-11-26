import DisplayLetter from "./DisplayLetter"

type Props = {
    word: Array<string>
}

const DisplayWord = ({ word }: Props) => (
    <div
        className="flex flex-wrap gap-2 bg-gray-200 rounded-lg p-4 w-max mx-auto"
    >
        {word.map((w, i) => <DisplayLetter key={w + i} letter={w} />)}
    </div>
)

export default DisplayWord
