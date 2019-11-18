import React, { useState } from 'react'
import { Signals } from '../assets/lettersAndMeanings'
import { SelectableFlag } from '../components/SelectableFlag'

export const Decode = () => {
  const [selectedFlags, setSelectedFlags] = useState([])
  const addLetter = (newFlag) => {
    setSelectedFlags([...selectedFlags, newFlag])
  }
  return (
    <div>
      <h2>Decode</h2>
      <div>
        <p className='text-encoded'>{selectedFlags.join('')}</p>
      </div>
      {Signals.map(item => {
        return <SelectableFlag letter={item.letter} onSelect={addLetter} />
      })}

    </div>
  )
}
