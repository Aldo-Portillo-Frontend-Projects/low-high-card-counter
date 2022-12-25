import React from "react";
import Game from "./components/Game";
import Form from "./components/Form";

function App() {

  const [cardsRemaining, setCardsRemaining] = React.useState(104) 
  const [gameRunning, setGameRunning] = React.useState(false)
  const [deckNumber, setDeckNumber] = React.useState(cardsRemaining/52)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Card Counting App</h1>
      </header>
      {gameRunning ? 
      <Game cardsRemaining={cardsRemaining} setCardsRemaining={setCardsRemaining} setGameRunning={setGameRunning} deckNumber={deckNumber} /> :
      <Form setCardsRemaining={setCardsRemaining} cardsRemaining={cardsRemaining} setGameRunning={setGameRunning} setDeckNumber={setDeckNumber} deckNumber={deckNumber}/>}
      
      
    </div>
  );
}

export default App;
