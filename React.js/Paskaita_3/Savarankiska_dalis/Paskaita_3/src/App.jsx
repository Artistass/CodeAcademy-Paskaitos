import { useState } from 'react'
import './App.css'

function App() {
  const [getScore, setScore] = useState(0)
  const [getDoublePoints, setDoublePoints ] = useState(false)
  const [getTriplePoints, setTriplePoints ] = useState(false)
  const [getCookieImage, setCookieImage] = useState("burlywood");
  const [getBgColor, setBgColor] = useState("white")

  function score () {
    let increment = 1;
    if (getDoublePoints && !getTriplePoints) increment *= 2; // If only double points are active
    if (!getDoublePoints && getTriplePoints) increment *= 3; // If only triple points are active
    if (getDoublePoints && getTriplePoints) increment *= 3; // If both double and triple points are active
    setScore(getScore + increment);
  }

  function purchaseDoublePoints() {
    if (getScore >= 50) {
      setScore(getScore - 50);
      setDoublePoints(true);
    } else {
      alert("Not enough score to purchase double points!");
    }
  }

  function purchaseTriplePoints() {
    if (getScore >= 100) {
      setScore(getScore - 100);
      setTriplePoints(true);
    } else {
      alert("Not enough score to purchase triple points!");
    }
  }

  function cookieColor () {

    if(getScore >= 50) {
      setScore(getScore - 50)
      setCookieImage("red")
    } else {
      alert("Not enough score to purchase cookie color!");
    }
  }

  function bgColor () {
    if (getScore >= 50) {
      setScore(getScore - 50);
      setBgColor("lightgrey");
    } else {
      alert("Not enough score to purchase bg color!");
    }
  }

  return (
    <>
     <div className='container'>
      <div 
      className='gameContainer'
      style={{backgroundColor: getBgColor}}
      >
        <div>
          <div 
          className='cookie'
          onClick={score}
          style={{backgroundColor: getCookieImage}}
          ></div>
        <h1>Score: {getScore}</h1>
        </div>
      </div>
      <div>
        <div 
        className='unlock'
        onClick={purchaseDoublePoints}>
          <h3>2 points per click</h3>
          <p>Price: 50$</p>
        </div>
        <div 
        className='unlock'
        onClick={purchaseTriplePoints}>
          <h3>3 points per click</h3>
          <p>Price: 100$</p>
        </div>
        <div 
        className='unlock'
        onClick={cookieColor}>
          <h3>change cookie image</h3>
          <p>Price: 50$</p>
        </div>
        <div 
        className='unlock'
        onClick={bgColor}>
          <h3>change bg color</h3>
          <p>Price: 50$</p>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
