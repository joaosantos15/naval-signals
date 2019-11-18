import React, {useState} from 'react'
import {FlagWord} from '../components/FlagWord'

export const Decode = () => {
  const [message, setMessage] = useState('')
  const updateInput = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className='decode-wrapper'>
      <div className='decode-input'>
        <input type='text' onChange={updateInput} placeholder='Your message here' />
      </div>
      <div className='decode-output'>
        <FlagWord word={message} />
      </div>

    </div>
  )
}
