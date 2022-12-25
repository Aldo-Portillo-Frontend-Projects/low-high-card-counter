import React from "react";
import Game from "./components/Game";
import Form from "./components/Form";

function App() {

  const [cardsRemaining, setCardsRemaining] = React.useState(104) 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Card Counting App</h1>
      </header>
      <Form setCardsRemaining={setCardsRemaining} cardsRemaining={cardsRemaining} bettingUnits={bettingUnits} setBettingUnits={setBettingUnits}/>
      <Game cardsRemaining={cardsRemaining} setCardsRemaining={setCardsRemaining} />
    </div>
  );
}

export default App;
