import React from 'react'
import {getSignalFromLetter} from '../helpers'

export const SelectableFlag = ({letter, onSelect}) => {
  const signal = getSignalFromLetter(letter)
  const select = () => { onSelect(letter) }

  return (
    <img className='selectable-flag' src={signal.figure} onClick={select} />
  )
}
