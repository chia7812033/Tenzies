import React from "react";
import Die from "./components/Die";

export default function App() {

  function allNewDice() {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6))
  }

  const [randomNumbers, setRandomNumbers] = React.useState(allNewDice())

  const allDice = randomNumbers.map(number => <Die value={number} />)

  function rollDice() {
    setRandomNumbers(allNewDice)
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
