import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

export default function HeightAdjuster() {

  const textareaRef = useRef();
  const [height, setHeight] = useState("auto")

  function adjustHeight() {
    setHeight('auto'); // Reset height to auto before setting it to scrollHeight
    setHeight(`${textareaRef.current.scrollHeight}px`);
    textareaRef.current.focus();
  }

  return (
    <div style={{marginTop: "50px"}}>

      <textarea 
      ref={textareaRef}
      style={{ height }}
      onChange={adjustHeight}
      placeholder="Type something..."

      ></textarea> <br />
      <button onClick={adjustHeight}>Height Adjuster</button>
    </div>
  )
}
