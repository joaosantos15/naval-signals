import React, { useState } from 'react'
import { Signals } from '../assets/lettersAndMeanings'
import { SelectableFlag } from '../components/SelectableFlag'
import {getKey} from '../helpers'

export const Decode = () => {
  const [selectedFlags, setSelectedFlags] = useState([])
  const addLetter = (newFlag) => {
    setSelectedFlags([...selectedFlags, newFlag])
  }
  const clearMessage = () => {
    setSelectedFlags([])
  }
  return (
    <div>
      <h2>Decode</h2>
      {/* <FlagInfo letter={selectedFlags[selectedFlags.length - 1]} /> */}
      <div>
        {selectedFlags.length > 0 ? <div>
          <span>
          Decoded message
          </span>
          <button className='clear-text-button' onClick={clearMessage}>clear</button>
        </div>
        : <p>Click the flags to select them</p>}
        <p className='text-encoded'>{selectedFlags.join('')}</p>

      </div>
      <div className='flags-panel'>
        {Signals.map(item => {
          return <SelectableFlag key={getKey()} letter={item.letter} onSelect={addLetter} />
        })}
      </div>

    </div>
  )
}
