import React from "react";
import Game from "./components/Game";

function App() {
  const [runningCount, setRunningCount] = React.useState(0)
  const [cardsRemaining, setCardsRemaining] = React.useState(104)
  const [roundedDeck, setRoundedDeck] = React.useState(cardsRemaining/52)
  const [trueCount, setTrueCount] = React.useState(1/roundedDeck)

  const drawLowCard = () => {
    setRunningCount(prevCount => prevCount + 1)
    setCardsRemaining(prevCount => prevCount -1)
  }

  const drawHighCard = () => {
    setRunningCount(prevCount => prevCount - 1)
    setCardsRemaining(prevCount => prevCount -1)
  }

  const drawNeutralCard = () => {
    setCardsRemaining(prevCount => prevCount -1)
  }

  function roundToHalf(num) {
    return Math.round(num*2)/2;
  } 

  //Use effect to round deck
  React.useEffect(() => {
    setRoundedDeck(roundToHalf(cardsRemaining/52))
  }, [cardsRemaining])

  //Use Effect to get True Count
  React.useEffect(() => {
    if(roundedDeck > 0){
      setTrueCount(runningCount / roundedDeck)
    }
  }, [roundedDeck, runningCount])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Card Counting App</h1>
      </header>
      
      <Game runningCount={runningCount} cardsRemaining={cardsRemaining} roundedDeck={roundedDeck} trueCount={trueCount} drawLowCard={drawLowCard} drawHighCard={drawHighCard} drawNeutralCard={drawNeutralCard}/>
    </div>
  );
}

export default App;
