import React, {useState} from 'react'
import {FlagWord} from '../components/FlagWord'

export const Encode = () => {
  const [message, setMessage] = useState('')
  const updateInput = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className='decode-wrapper'>
      <h2>Encode</h2>
      <div className='decode-input'>
        <textarea rows='4' type='text' onChange={updateInput} placeholder='Your message here' />
      </div>
      <div className='decode-output'>
        <FlagWord word={message} />
      </div>
    </div>
  )
}
