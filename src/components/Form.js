import React from 'react'

export default function Form() {
  return (
    <div className='form-page'>
        <h2>Welcome to the Card Counter! Lets  make some money!!!</h2>
        <form>
            <label for="decks">Decks</label>
            <input type="number" name="number" placeholder='2' />
            <label for="bettingUnits">Betting Units</label>
            <input type="number" name="bettingUnits" placeholder='25' />
            <button>Submit</button>
        </form>
    </div>
  )
}
