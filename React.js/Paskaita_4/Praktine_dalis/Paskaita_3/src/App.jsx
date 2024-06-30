import { useState } from 'react'
import './App.css'

function App() {

  // const [num, setNum] = useState(4)

  // return (
  //   <>
  //     <div>
  //       {num > 3 && <h1>Yes More than 3</h1>}

  //       {num === 4 ? <h1>Yes its 4</h1> : <h1>No its not 4 3</h1>}
  //     </div>
  //   </>
  // )

  // const [emoji, setEmoji] = useState(true);

  // return (
  //   <div>
  //     <div>
  //       {emoji === true ? <h1 style={{fontSize: "100px"}} >":)"</h1> : <h1 style={{fontSize: "100px"}} >":("</h1>}
  //     </div>
  //     <button 
  //     onClick={() => setEmoji(true)}
  //     style={{marginRight: "20px"}}
  //     >Happy</button>

  //     <button onClick={() => setEmoji(false)}>Sad</button>
  //   </div>
  // );

  const [playerSymbol, setPlayerSymbol] = useState();
  const [computerSymbol, setComputerSymbol] = useState();
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);


  function computerAi () {

    const symbols = ["✌️", "🤚", "✊"];

    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    setComputerSymbol(randomSymbol);
    determineWinner(playerSymbol, randomSymbol);
  }

    function determineWinner(playerSymbol, computerSymbol) {
      if (!playerSymbol) return;
  
      if (
        (playerSymbol === "✌️" && computerSymbol === "🤚") ||
        (playerSymbol === "🤚" && computerSymbol === "✊") ||
        (playerSymbol === "✊" && computerSymbol === "✌️")
      ) {
        setPlayerPoints(playerPoints + 1);
      } else if (
        (computerSymbol === "✌️" && playerSymbol === "🤚") ||
        (computerSymbol === "🤚" && playerSymbol === "✊") ||
        (computerSymbol === "✊" && playerSymbol === "✌️")
      ) {
        setComputerPoints(computerPoints + 1);
      }
      }
  

  return (
    <div>
      <div>
        <p>Computer points: {computerPoints}</p>
        <p>Player points: {playerPoints}</p>
      </div>

      <div>
        <h2>Computer symbol: {computerSymbol}</h2>
        <h2>player symbol: {playerSymbol}</h2>
      </div>

      <button onClick={computerAi} >Play</button>

      <div>
        <button onClick={() => setPlayerSymbol("✌️")} >✌️</button>
        <button  onClick={() => setPlayerSymbol("🤚")}>🤚</button>
        <button  onClick={() => setPlayerSymbol("✊")} >✊</button>
      </div>
    </div>
  )
}


export default App
