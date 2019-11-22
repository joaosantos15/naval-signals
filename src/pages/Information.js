import React, { useState } from 'react'
import { Signals } from '../assets/lettersAndMeanings'
import { SelectableFlag } from '../components/SelectableFlag'
import { FlagInfo } from '../components/FlagInfo'
import {getKey} from '../helpers'

export const Information = () => {
  const [selectedFlags, setSelectedFlags] = useState([])
  const addLetter = (newFlag) => {
    setSelectedFlags([...selectedFlags, newFlag])
  }
  return (
    <div>
      <h2>Flag Meaning</h2>
      <FlagInfo letter={selectedFlags[selectedFlags.length - 1]} />
      {selectedFlags.length === 0 && <p>Click a flag to see its meaning</p>}
      <div className='flags-panel'>
        {Signals.map(item => {
          return <SelectableFlag key={getKey()} letter={item.letter} onSelect={addLetter} />
        })}
      </div>
    </div>
  )
}
