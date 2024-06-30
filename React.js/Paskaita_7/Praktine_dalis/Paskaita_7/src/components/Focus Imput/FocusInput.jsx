import React from 'react'
import { useRef } from 'react'

export default function FocusInput() {

  const inputRef = useRef();

  return (
    <div>
      <input 
      ref={inputRef}
      type="text" 
      placeholder='Focus here!' />
      <button onClick={() => inputRef.current.focus()}>Click to focus</button>
    </div>
  )
}
