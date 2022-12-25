import React from "react";
import Game from "./components/Game";
import Form from "./components/Form";

function App() {

  const [cardsRemaining, setCardsRemaining] = React.useState(104) //need
  

  

  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Card Counting App</h1>
      </header>
      <Form />
      <Game cardsRemaining={cardsRemaining} setCardsRemaining={setCardsRemaining} />
    </div>
  );
}

export default App;
