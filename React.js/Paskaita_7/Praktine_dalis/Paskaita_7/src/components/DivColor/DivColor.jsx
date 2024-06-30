import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function DivColor() {

  const [color, setColor] = useState('white');
  const divRef = useRef();

  function changeColor() {
    const newColor = color === 'white' ? 'blue' : 'white';
    setColor(newColor);
    divRef.current.style.backgroundColor = newColor;
  }


  return (
    <div>

      <div 
    ref={divRef}
    style={{
      display: "flex",
      justifyContent: "center",
      height: "200px",
      width: "200px",
      border: "5px solid black"
    }}></div>
    <button onClick={changeColor}>Change Colors</button>
    </div>
  )
}
