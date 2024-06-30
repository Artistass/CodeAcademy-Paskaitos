import { useState } from 'react'
import './App.css'
import FocusInput from './components/Focus Imput/FocusInput'
import AudioPlayer from './components/Audio Player/AudioPlayer'
import DivColor from './components/DivColor/DivColor'
import ClickCounter from './components/ClickCounter/ClickCounter'
import HeightAdjuster from './components/HeightAdjuster/HeightAdjuster'

function App() {

  return (
   <div>
    <div style={{marginBottom: "50px"}}>
<FocusInput/>
    </div>
<AudioPlayer/>
<div><DivColor/></div>
<div><ClickCounter/></div>
<div><HeightAdjuster/></div>
   </div>
  )
}

export default App
