import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Center from '../components/Center'
import { setGameState } from '../features/hangman-slice'
import { GameState } from '../models/game-state'

const Error404 = () => {
  return (
    <div className='bg-gray-700 h-screen'>
      <Center>
        <h1 className='mx-auto text-3xl text-white'>
          Error404
        </h1>
        <Link to="/" className='mx-auto'>
          <Button element={"Menu"} actions={[setGameState(GameState.MENU)]} />
        </Link>
      </Center>
    </div>
  )
}

export default Error404
