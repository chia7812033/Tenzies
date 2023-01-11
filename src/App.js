import Die from "./components/Die";

export default function App() {

  function allNewDice() {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6))
  }

  return (
    <div className="App">
      <main>
        <div className="dies">
          <Die value={5} />
          <Die value={4} />
          <Die value={2} />
          <Die value={1} />
          <Die value={6} />
          <Die value={3} />
          <Die value={5} />
          <Die value={4} />
          <Die value={2} />
          <Die value={1} />
        </div>
      </main>
    </div>
  );
}
