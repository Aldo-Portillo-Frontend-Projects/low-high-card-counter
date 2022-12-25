import React from "react";

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
      <h3>Running Count: {runningCount}</h3>
      <h3>Cards Remaining: {cardsRemaining}</h3>
      <h3>Rounded Deck: {roundedDeck}</h3>
      <h3>True Count: {trueCount}</h3>

      <button onClick={() => drawLowCard()}>2</button>
      <button onClick={() => drawLowCard()}>3</button>
      <button onClick={() => drawLowCard()}>4</button>
      <button onClick={() => drawLowCard()}>5</button>
      <button onClick={() => drawLowCard()}>6</button>
      <button onClick={() => setCardsRemaining(prevCards => prevCards -1)}>0</button>

      <button onClick={() => drawHighCard()}>10</button>
      <button onClick={() => drawHighCard()}>J</button>
      <button onClick={() => drawHighCard()}>Q</button>
      <button onClick={() => drawHighCard()}>K</button>
      <button onClick={() => drawHighCard()}>A</button>

      <h3>Statement: {trueCount > 1 ? `You have good odds bet ${trueCount - 1} betting units` : "Your odds aren't good don't increase bets"}</h3>
    </div>
  );
}

export default App;
