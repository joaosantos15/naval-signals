import React, {useState} from 'react'
import {FlagWord} from '../components/FlagWord'

export const Decode = () => {
  const [message, setMessage] = useState('a')

  const updateInput = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className='decode-wrapper'>
      <div className='decode-input'>
        <p>Enter your message</p>
        <input type='text' onChange={updateInput} />
      </div>
      <div className='decode-output'>
        <p>{message}</p>
        <FlagWord word={message} />
      </div>

    </div>
  )
}
