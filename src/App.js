import React from "react"
import Die from "./components/Die"
import { nanoid } from 'nanoid'

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

  const allDice = randomDice.map(die => <Die key={die.id} die={die} holdDice={holdDice}/>)

  function rollDice() {
    setRandomDice(allNewDice)
  }

  function holdDice(event, id) {
    setRandomDice(prevState => prevState.map(die => die.id === id ? { ...die, isHeld: true} : die ))
  }

  return (
    <div className="App">
      <main>
        <div className="dies">
          {allDice}
        </div>
        <button className="roll-btn" onClick={rollDice}>Roll</button>
      </main>
    </div>
  );
}
