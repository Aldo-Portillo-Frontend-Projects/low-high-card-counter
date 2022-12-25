import React from 'react'

export default function Game({runningCount, cardsRemaining, roundedDeck, trueCount, drawLowCard, drawHighCard, drawNeutralCard}) {
  return (
    <div className='game-page'>
        <h3>Running Count: {runningCount}</h3>
      <h3>Cards Remaining: {cardsRemaining}</h3>
      <h3>Rounded Deck: {roundedDeck}</h3>
      <h3>True Count: {trueCount}</h3>

      <button onClick={() => drawLowCard()}>2</button>
      <button onClick={() => drawLowCard()}>3</button>
      <button onClick={() => drawLowCard()}>4</button>
      <button onClick={() => drawLowCard()}>5</button>
      <button onClick={() => drawLowCard()}>6</button>
      <button onClick={() => drawNeutralCard()}>0</button>

      <button onClick={() => drawHighCard()}>10</button>
      <button onClick={() => drawHighCard()}>J</button>
      <button onClick={() => drawHighCard()}>Q</button>
      <button onClick={() => drawHighCard()}>K</button>
      <button onClick={() => drawHighCard()}>A</button>

      <h3>Statement: {trueCount > 1 ? `You have good odds bet ${trueCount - 1} betting units` : "Your odds aren't good don't increase bets"}</h3>
    </div>
  )
}
