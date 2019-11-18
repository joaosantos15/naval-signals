import React from 'react'
import {getSignalFromLetter} from '../helpers/index'

export const FlagWord = ({word}) => {
  return (
    <div className='flag-word-wrapper'>
      {word.split('').map(char => {
        const signal = getSignalFromLetter(char)
        if (signal) {
          return <img src={signal.figure} alt={signal.phonetic} />
        } else {
          return <div />
        }
      })}
    </div>
  )
}
