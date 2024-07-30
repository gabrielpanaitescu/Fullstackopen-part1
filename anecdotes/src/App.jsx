import { useState } from "react";
import anecdotes from "./anecdotes.js";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const maxValue = Math.max(...points);
  const topAnecdote = anecdotes[points.indexOf(maxValue)];

  const handleVote = () => {
    const copyPoints = [...points];
    copyPoints[selected] = copyPoints[selected] + 1;
    setPoints(copyPoints);
  };

  const handleNext = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  return (
    <div>
      <section>
        <h2>Anecdote of the day</h2>
        <div>{anecdotes[selected]}</div>
        <p>has {points[selected]} points</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </section>
      <section>
        <h2>Anecdote with most votes</h2>
        {maxValue < 1 ? (
          <p>No votes registered yet</p>
        ) : (
          <>
            <p>{topAnecdote}</p>
            <p>has {maxValue} points</p>
          </>
        )}
      </section>
    </div>
  );
};
export default App;
