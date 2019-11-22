import React from 'react'
import {getSignalFromLetter, getKey} from '../helpers'

export const FlagWord = ({word}) => {
  return (
    <div className='flag-word-wrapper'>
      {word.split('').map(char => {
        const signal = getSignalFromLetter(char)
        if (signal) {
          return <img key={getKey()} src={signal.figure} alt={signal.phonetic} />
        } else {
          return <div key={getKey()} />
        }
      })}
    </div>
  )
}
