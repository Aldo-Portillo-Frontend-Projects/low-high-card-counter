import React from 'react'

export default function Form({cardsRemaining, setCardsRemaining, setGameRunning, setDeckNumber, deckNumber}) {

  const changeNumber = (e) => {
    setDeckNumber(e.target.value)
    setCardsRemaining(e.target.value * 52)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setGameRunning(true)
  }
  return (
    <div className='form-page'>
        <h2>Welcome to the Card Counter! Lets  make some money!!!</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="decks">Decks</label>
            <input type="number" name="number" min="1" max="10" placeholder={deckNumber} onChange={(e)=> changeNumber(e) } />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
