import React, { useRef } from 'react'


export default function VideoPlayer() {

  // Senas budas
  const videoPlayer = document.querySelector("video")
  console.log(videoPlayer);

  // Naujas Budas
  const videoPlayerRef = useRef();

  // console.log(videoPlayerRef.current);

  return (
    <div>
      <video ref={videoPlayerRef} controls src="/src/assets/video.mp4"></video>
      <button onClick={() => videoPlayerRef.current.play()}>Play</button>
      <button onClick={() => videoPlayerRef.current.pause()}>Pause</button>
    </div>
  )
}
