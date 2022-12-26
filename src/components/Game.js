import React from 'react'

export default function Game({ cardsRemaining, setCardsRemaining, setGameRunning, deckNumber}) {

    const [runningCount, setRunningCount] = React.useState(0)
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

      const reshuffle = () => {
        setCardsRemaining(deckNumber*52)
        setRunningCount(0)
        setRoundedDeck(deckNumber)
        setTrueCount(1/deckNumber)
      }

      const newGame=() => {
        reshuffle()
        setGameRunning(false)
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
    <div className='game-page'>
      <h2>Statement: {trueCount > 1 ? `You have good odds bet ${trueCount - 1} betting units` : "Your odds aren't good don't increase bets"}</h2>
      <div className='chip-container'>
        <div className='low-cards'>
          <img src={require("../assets/chips/2.png")} alt="2" onClick={() => drawLowCard()}/>
          <img src={require("../assets/chips/3.png")} alt="3" onClick={() => drawLowCard()}/>
          <img src={require("../assets/chips/4.png")} alt="4" onClick={() => drawLowCard()}/>
          <img src={require("../assets/chips/5.png")} alt="5" onClick={() => drawLowCard()}/>
          <img src={require("../assets/chips/6.png")} alt="6" onClick={() => drawLowCard()}/>
        </div>
        <div className='neutral-cards'>
        <img src={require("../assets/chips/joker.png")} alt="joker" onClick={() => drawNeutralCard()}/>
        </div>

        <div className='high-cards'>
          <img src={require("../assets/chips/10.png")} alt="10" onClick={() => drawHighCard()}/>
          <img src={require("../assets/chips/jack.png")} alt="jack" onClick={() => drawHighCard()}/>
          <img src={require("../assets/chips/queen.png")} alt="queen" onClick={() => drawHighCard()}/>
          <img src={require("../assets/chips/king.png")} alt="king" onClick={() => drawHighCard()}/>
          <img src={require("../assets/chips/ace.png")} alt="ace" onClick={() => drawHighCard()}/>
        </div>
      </div>
      
      <h3>Running Count: {runningCount}</h3>
      <h3>Cards Remaining: {cardsRemaining}</h3>
      <h3>True Count: {trueCount}</h3>

      <div className='buttons'>
        <button onClick={()=>newGame()}>New Game</button>
        <button onClick={() => reshuffle()}>Reshuffle</button>
      </div>
    </div>
  )
}
