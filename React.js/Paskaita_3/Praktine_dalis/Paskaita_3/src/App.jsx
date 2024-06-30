import { useState } from 'react';
import './App.css';

function App() {
  
  // const [getColor, setColor] = useState('white');


  // function blue() {
  //   setColor('blue');
  // }

  // function red() {
  //   setColor('red');
  // }

  // function yellow() {
  //   setColor('yellow');
  // }

  // return (
  //   <div>
  //     <div 
  //     className='colorDiv'
  //     style={{ backgroundColor: getColor }}
  //     >{ getColor }</div>
  //     <button onClick={blue}>Blue</button>
  //     <button onClick={red}>Red</button>
  //     <button onClick={yellow}>Yellow</button>
  //   </div>
  // );

//   const [getRandomLetter, setRandomLetter] = useState("");

//   function generateRandomLetter () {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//     const randomLetter = letters[Math.floor(Math.random() * letters.length)];
//     setRandomLetter(randomLetter);
//   }
  

//   return (
//     <div>
// <h1>{getRandomLetter}</h1>
// <button onClick={generateRandomLetter} >Generate</button>
//     </div>
//   )

  const [getPhoto, setPhoto] = useState("");

  return (
 <div>
  <img 
  src={getPhoto}
  style={{width: "250px", display: "flex", marginBottom: "20px"}} alt="" />

  <button onClick={() => setPhoto("https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg")} 
  style={{marginRight: "20px"}}
  >Show Cat</button>

  <button 
  onClick={() => setPhoto("https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg")} 
  >Show Dog</button>
 </div>
  )
}

export default App;
