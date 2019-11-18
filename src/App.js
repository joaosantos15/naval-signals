import React, {useState} from 'react'
import './App.css'
import {Decode} from './pages/Decode'
import {Encode} from './pages/Encode'

const modes = {
  encode: 'ENCODE',
  decode: 'DECODE'

}

function App () {
  const [mode, setMode] = useState(modes.encode)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Naval Signs</h1>
        <button onClick={() => setMode(modes.encode)}>Encode</button>
        <button onClick={() => setMode(modes.decode)}>Decode</button>
      </header>
      <div className='main'>
        { mode === modes.encode && <Encode />}
        {mode === modes.decode && <Decode />}
      </div>
    </div>
  )
}

export default App
