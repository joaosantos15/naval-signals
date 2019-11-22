import React, {useState} from 'react'
import './App.css'
import {Decode} from './pages/Decode'
import {Encode} from './pages/Encode'
import {Information} from './pages/Information'
import {NavButton} from './components/NavButton'

const modes = {
  encode: 'ENCODE',
  decode: 'DECODE',
  info: 'INFO'

}

function App () {
  const [mode, setMode] = useState(modes.encode)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Naval Signs</h1>
        <div className='nav-buttons'>
          <NavButton
            handler={() => setMode(modes.encode)}
            active={mode === modes.encode}
            label='Encode Message'
          />
          <NavButton
            handler={() => setMode(modes.decode)}
            active={mode === modes.decode}
            label='Decode Message'
          />
          <NavButton
            handler={() => setMode(modes.info)}
            active={mode === modes.info}
            label='Flag Meaning'
          />
        </div>
      </header>
      <div className='main'>
        { mode === modes.encode && <Encode />}
        {mode === modes.decode && <Decode />}
        {mode === modes.info && <Information />}
      </div>
    </div>
  )
}

export default App
