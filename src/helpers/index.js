import {Signals} from '../assets/lettersAndMeanings'

export const getSignalFromLetter = (letter) => {
  try {
    const signal = Signals.filter(item => item.letter.toUpperCase() === letter.toUpperCase())[0]
    return signal
  } catch (e) {
    console.error('Error getting letter ' + letter)
  }
}
