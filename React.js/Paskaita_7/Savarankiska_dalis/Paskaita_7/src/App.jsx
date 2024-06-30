import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import Timer from './components/Timer/Timer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  const [count, setCount] = useState(0);
  const [showTimer, setShowTimer] = useState(true);
  const persistentValue = useRef();

  useEffect(() => {
    console.log("count change", count);
  }, [count]);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    }
  }, []);

  function handleClick() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={() => persistentValue.current = 9}>Change useRef value</button>
      <button onClick={() => console.log(persistentValue.current)}>Log useRef value</button>
      <button onClick={handleClick}>Click me</button>
      <h1>{count}</h1>
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      {showTimer && <Timer />}
      <VideoPlayer />
    </div>
  )
}

export default App;
