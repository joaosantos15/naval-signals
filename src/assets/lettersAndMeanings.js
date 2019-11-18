import Alpha from '../assets/img/flags/ICS_Alpha.svg'
import Golf from '../assets/img/flags/ICS_Golf.svg'
import Mike from '../assets/img/flags/ICS_Mike.svg'
import Sierra from '../assets/img/flags/ICS_Sierra.svg'
import Yankee from '../assets/img/flags/ICS_Yankee.svg'
import Bravo from '../assets/img/flags/ICS_Bravo.svg'
import Hotel from '../assets/img/flags/ICS_Hotel.svg'
import November from '../assets/img/flags/ICS_November.svg'
import Tango from '../assets/img/flags/ICS_Tango.svg'
import Zulu from '../assets/img/flags/ICS_Zulu.svg'
import Charlie from '../assets/img/flags/ICS_Charlie.svg'
import India from '../assets/img/flags/ICS_India.svg'
import Oscar from '../assets/img/flags/ICS_Oscar.svg'
import Uniform from '../assets/img/flags/ICS_Uniform.svg'
import Delta from '../assets/img/flags/ICS_Delta.svg'
import Juliet from '../assets/img/flags/ICS_Juliet.svg'
import Papa from '../assets/img/flags/ICS_Papa.svg'
import Victor from '../assets/img/flags/ICS_Victor.svg'
import Echo from '../assets/img/flags/ICS_Echo.svg'
import Kilo from '../assets/img/flags/ICS_Kilo.svg'
import Quebec from '../assets/img/flags/ICS_Quebec.svg'
import Whiskey from '../assets/img/flags/ICS_Whiskey.svg'
import Foxtrot from '../assets/img/flags/ICS_Foxtrot.svg'
import Lima from '../assets/img/flags/ICS_Lima.svg'
import Romeo from '../assets/img/flags/ICS_Romeo.svg'
import Xray from '../assets/img/flags/ICS_X-ray.svg'

export const Signals = [
  {
    letter: 'A',
    phonetic: 'Alpha',
    figure: Alpha,
    icsMeaning: 'I have a diver down; keep well clear at slow speed.',
    meaningWithNumbers: 'Azimuth or bearing'
  },
  {
    letter: 'B',
    phonetic: 'Bravo',
    figure: Bravo,
    icsMeaning: 'I am taking in or discharging or carrying dangerous goods. (Originally used by the Royal Navy specifically for military explosives.)',
    meaningWithNumbers: ''
  },
  {
    letter: 'C',
    phonetic: 'Charlie',
    figure: Charlie,
    icsMeaning: 'Affirmative.[a][b]',
    meaningWithNumbers: 'Course in degrees magnetic'
  },
  {
    letter: 'D',
    phonetic: 'Delta',
    figure: Delta,
    icsMeaning: 'Keep clear of me; I am maneuvering with difficulty.[b]',
    meaningWithNumbers: 'Date'
  },
  {
    letter: 'E',
    phonetic: 'Echo',
    figure: Echo,
    icsMeaning: 'I am altering my course to starboard.[b]',
    meaningWithNumbers: ''
  },
  {
    letter: 'F',
    phonetic: 'Foxtrot',
    figure: Foxtrot,
    icsMeaning: 'I am disabled; communicate with me.[c]',
    meaningWithNumbers: ''
  },
  {
    letter: 'G',
    phonetic: 'Golf',
    figure: Golf,
    icsMeaning: 'I require a pilot.\nBy fishing vessels near fishing grounds: I am hauling nets.',
    meaningWithNumbers: 'Longitude (The first 2 or 3 digits denote degrees; the last 2 denote minutes.)'
  },
  {
    letter: 'H',
    phonetic: 'Hotel',
    figure: Hotel,
    icsMeaning: 'I have a pilot on board.[b]',
    meaningWithNumbers: ''
  },
  {
    letter: 'I',
    phonetic: 'India',
    figure: India,
    icsMeaning: 'I am altering my course to port.[b]',
    meaningWithNumbers: ''
  },
  {
    letter: 'J',
    phonetic: 'Juliet',
    figure: Juliet,
    icsMeaning: 'I am on fire and have dangerous cargo on board: keep well clear of me.\nor\nI am leaking dangerous cargo.',
    meaningWithNumbers: ''
  },
  {
    letter: 'K',
    phonetic: 'Kilo',
    figure: Kilo,
    icsMeaning: 'I wish to communicate with you.',
    meaningWithNumbers: 'I wish to communicate with you by...:\n1) Morse signaling by hand-flags or arms;\n2) Loud hailer (megaphone);\n3) Morse signaling lamp;\n4) Sound signals.'
  },
  {
    letter: 'L',
    phonetic: 'Lima',
    figure: Lima,
    icsMeaning: 'In harbour: The ship is quarantined.\nAt sea: You should stop your vessel instantly.',
    meaningWithNumbers: 'Latitude (the first 2 digits denote degrees; the last 2 denote minutes.)'
  },
  {
    letter: 'M',
    phonetic: 'Mike',
    figure: Mike,
    icsMeaning: 'My vessel is stopped and making no way through the water.[b]',
    meaningWithNumbers: ''
  },
  {
    letter: 'N',
    phonetic: 'November',
    figure: November,
    icsMeaning: 'Negative.[a]',
    meaningWithNumbers: ''
  },
  {
    letter: 'O',
    phonetic: 'Oscar',
    figure: Oscar,
    icsMeaning: 'Man overboard.[b] (often attached to the man overboard pole on boats).\nWith a sinister hoist, the semaphore flag.',
    meaningWithNumbers: ''
  },
  {
    letter: 'P',
    phonetic: 'Papa',
    figure: Papa,
    icsMeaning: 'The blue Peter.\nIn harbour: All persons should report on board as the vessel is about to proceed to sea.\nAt sea: It may be used by fishing vessels to mean: My nets have come fast upon an obstruction.',
    meaningWithNumbers: ''
  },
  {
    letter: 'Q',
    phonetic: 'Quebec',
    figure: Quebec,
    icsMeaning: "My vessel is 'healthy' and I request free pratique.",
    meaningWithNumbers: ''
  },
  {
    letter: 'R',
    phonetic: 'Romeo',
    figure: Romeo,
    icsMeaning: 'No ICS meaning as single flag.',
    meaningWithNumbers: 'Distance (range) in nautical miles.'
  },
  {
    letter: 'S',
    phonetic: 'Sierra',
    figure: Sierra,
    icsMeaning: 'I am operating astern propulsion.[b]',
    meaningWithNumbers: 'Speed (velocity) in knots'
  },
  {
    letter: 'T',
    phonetic: 'Tango',
    figure: Tango,
    icsMeaning: 'Keep clear of me.[b]\nFishing boats: Keep clear of me; I am engaged in pair trawling.',
    meaningWithNumbers: 'Local time. (The first 2 digits denote hours; the last 2 denote minutes.)'
  },
  {
    letter: 'U',
    phonetic: 'Uniform',
    figure: Uniform,
    icsMeaning: 'You are running into danger.',
    meaningWithNumbers: ''
  },
  {
    letter: 'V',
    phonetic: 'Victor',
    figure: Victor,
    icsMeaning: 'I require assistance.',
    meaningWithNumbers: 'Speed in kilometres per hour.'
  },
  {
    letter: 'W',
    phonetic: 'Whiskey',
    figure: Whiskey,
    icsMeaning: 'I require medical assistance.',
    meaningWithNumbers: ''
  },
  {
    letter: 'X',
    phonetic: 'Xray',
    figure: Xray,
    icsMeaning: 'Stop carrying out your intentions and watch for my signals.',
    meaningWithNumbers: ''
  },
  {
    letter: 'Y',
    phonetic: 'Yankee',
    figure: Yankee,
    icsMeaning: 'I am dragging my anchor.',
    meaningWithNumbers: ''
  },
  {
    letter: 'Z',
    phonetic: 'Zulu',
    figure: Zulu,
    icsMeaning: 'I require a tug.\nBy fishing vessels near fishing grounds: I am shooting nets.[d]',
    meaningWithNumbers: 'Time (UTC). (The first 2 digits denote hours; the last 2 denote minutes.)'
  }
]
