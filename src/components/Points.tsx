import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setPoints } from '../features/hangman-slice'
import { WinningState } from '../models/winner-state'
import '../styles/points.css'

const Points = (): JSX.Element => {
    const points = useAppSelector(state => state.hangman.points)
    const winner = useAppSelector(state => state.hangman.winner)
    const [animation, setAnimation] = useState(false)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if (winner === WinningState.PLAYER)
            dispatch(setPoints())
    }, [winner])

    useEffect(() => {
        if (points > 0) {
            setAnimation(true)
            setTimeout(() => {
                setAnimation(false)
            }, 1200)
        }
    }, [points])

    return (
        <div className='flex flex-row w-full pt-2 pb-1 sm:px-12 px-0 mr-3'>
            <p className={`${animation && 'growth'} h-full my-auto ml-auto text-yellow-500 text-xl pr-1`}>{points}</p>
            <img
                src="https://img.icons8.com/emoji/48/null/coin-emoji.png"
                alt="gold image"
                height={32}
                width={32}
            />
        </div>
    )
}

export default Points
