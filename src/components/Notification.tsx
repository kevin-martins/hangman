import { useEffect, useState } from 'react'
import '../styles/notification.css'

type Props = {
  message: string
}

const Notification = ({ message }: Props) => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black/30 sm:w-96 w-72 h-40 z-50'>
      <div className='text-white mx-10'>
        <h2 className='text-center text-2xl border-b-[.5px] border-white py-2'>Notification</h2>
        <p className='mx-6 text-justify mt-3'>{message}</p>
      </div>
    </div>
  )
}

export default Notification
