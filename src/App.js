import React from "react"
import Die from "./components/Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  const [randomDice, setRandomDice] = React.useState(allNewDice())

  const allDice = randomDice.map(die => <Die key={die.id} die={die} holdDice={holdDice} />)

  function rollDice() {
    setRandomDice(prevState => prevState.map(die => {
      return die.isHeld ?
        die :
        {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        }
    }))
  }

  function holdDice(event, id) {
    setRandomDice(prevState => prevState.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    }))
  }

  const [tenzies, setTenzies] = React.useState(false)

  function newGame() {
    setRandomDice(allNewDice())
    setTenzies(false)
  }

  React.useEffect(() => {
    if (!randomDice[0].isHeld) {
      return
    }
    const value = randomDice[0].value
    for (let i = 1; i < 10; i++) {
      if (value != randomDice[i].value || randomDice[i].isHeld === false) {
        return
      }
      if (i === 9) {
        setTenzies(true)
      }
    }
  }, [randomDice])


  return (
    <div className="App">
      {tenzies && <Confetti />}
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dies">
          {allDice}
        </div>
        <button className="roll-btn" onClick={tenzies ? newGame : rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      </main>
    </div>
  );
}
