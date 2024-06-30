import React, { useRef } from 'react'
import { useState } from 'react';

export default function AudioPlayer() {

  const audioRef = useRef();
  const [isLooping, setIsLooping] = useState(false)

  function stopHandle () {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  function loopHandle() {
    audioRef.current.loop = !audioRef.current.loop;
    setIsLooping(true);
  }

    return (
    <div>
      <audio 
      ref={audioRef}
      controls
       src="/src/assets/Disturbed  - The Sound Of Silence (Official Music Video) [4K UPGRADE].mp3"></audio> <br />
      <button 
      style={{margin: "20px"}}
      onClick={() => audioRef.current.play()}
      >Paly</button>
      <button 
       style={{marginRight: "20px"}}
      onClick={() => audioRef.current.pause()}
      >Pause</button>
      <button 
       style={{marginRight: "20px"}}
      onClick={stopHandle}
      >Stop</button>
      <button onClick={loopHandle}>{isLooping ? "Loop ON" : "Loop OFF"}</button>
    </div>
  )
}
