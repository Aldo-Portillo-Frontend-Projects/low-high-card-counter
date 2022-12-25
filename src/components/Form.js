import React from 'react'

export default function Form({cardsRemaining, setCardsRemaining, bettingUnits, setBettingUnits}) {

  const changeNumber = (e) => {
    console.log(e.target.value)
    setCardsRemaining(e.target.value * 52)
  }

  const changeBettingUnits = (e) => {
    console.log(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='form-page'>
        <h2>Welcome to the Card Counter! Lets  make some money!!!</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="decks">Decks</label>
            <input type="number" name="number" placeholder={cardsRemaining/52} onChange={(e)=> changeNumber(e) } />
            <label htmlFor="bettingUnits">Betting Units</label>
            <input type="number" name="bettingUnits" placeholder={bettingUnits} onChange={(e)=> changeBettingUnits(e)}/>
            <button type="submit" onClick={() => console.log(cardsRemaining)}>Submit</button>
        </form>
    </div>
  )
}
