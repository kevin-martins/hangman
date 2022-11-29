import { useAppSelector } from '../app/hooks'

const Points = (): JSX.Element => {
    const points = useAppSelector(state => state.hangman.points)

    return (
        <div className='flex flex-row w-full py-8 px-12'>
            <span className='h-full my-auto ml-auto text-white pr-1'>{points}</span>
            <img
                className=''
                src="https://img.icons8.com/emoji/48/null/coin-emoji.png"
                height={32}
                width={32}
            />
        </div>
    )
}

export default Points
