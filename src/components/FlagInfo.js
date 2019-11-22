import React from 'react'
import {getSignalFromLetter} from '../helpers'

export const FlagInfo = ({letter}) => {
  const signal = getSignalFromLetter(letter)

  return (
      signal
    ? <div className='flag-info-wrapper'>
      <div className='flag-info-figure'>
        <img className='img-flag-info' src={signal.figure} alt={signal.phonetic} />
        <p className='img-flag-info-letter'>{signal.letter}</p>
      </div>
      <div className='flag-info-text'>
        <p>Phonetic name</p>
        <p>{signal.phonetic}</p>

        <p>ICS Meaning</p>
        <p>{signal.icsMeaning}</p>

        {signal.meaningWithNumbers && <p>Meaning when used with numbers</p>}
        {signal.meaningWithNumbers && <p>{signal.meaningWithNumbers}</p> }
      </div>
    </div>
    : <div />
  )
}
