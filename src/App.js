import React from "react";

function App() {
  const [runningCount, setRunningCount] = React.useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Card Counting App</h1>
      </header>
      <h3>Running Count: {runningCount}</h3>

      <button onClick={() => setRunningCount(prevCount => prevCount+1)}>3</button>
      <button onClick={() => setRunningCount(prevCount => prevCount+1)}>2</button>
      <button onClick={() => setRunningCount(prevCount => prevCount+1)}>4</button>
      <button onClick={() => setRunningCount(prevCount => prevCount+1)}>5</button>
      <button onClick={() => setRunningCount(prevCount => prevCount+1)}>6</button>

      <button onClick={() => setRunningCount(prevCount => prevCount-1)}>10</button>
      <button onClick={() => setRunningCount(prevCount => prevCount-1)}>J</button>
      <button onClick={() => setRunningCount(prevCount => prevCount-1)}>A</button>
      <button onClick={() => setRunningCount(prevCount => prevCount-1)}>K</button>
      <button onClick={() => setRunningCount(prevCount => prevCount-1)}>A</button>
    </div>
  );
}

export default App;
