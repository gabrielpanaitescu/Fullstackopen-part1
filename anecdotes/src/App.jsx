import { useState } from "react";
import anecdotes from "./anecdotes.js";

const App = () => {
  const [anecdotesObj, setAnecdotesObj] = useState(
    anecdotes.reduce((accum, currValue, index) => {
      accum[index] = { anecdote: currValue, points: 0 };
      return accum;
    }, {})
  );
  const [selected, setSelected] = useState(0);

  const handleVote = () => {
    setAnecdotesObj((prevAnecdotesObj) => {
      return {
        ...prevAnecdotesObj,
        [selected]: {
          anecdote: prevAnecdotesObj[selected].anecdote,
          points: prevAnecdotesObj[selected].points + 1,
        },
      };
    });
  };

  const handleNext = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    setSelected(randomNumber);
  };

  const topAnecdoteObj = Object.values(anecdotesObj).reduce(
    (accum, currValue) => {
      if (currValue.points > accum.points) return currValue;
      return accum;
    },
    anecdotesObj[0]
  );

  return (
    <div>
      <section>
        <h2>Anecdote of the day</h2>
        <div>{anecdotesObj[selected].anecdote}</div>
        <p>has {anecdotesObj[selected].points} points</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </section>
      <section>
        <h2>Anecdote with most votes</h2>
        {topAnecdoteObj.points < 1 ? (
          <p>No votes registered yet</p>
        ) : (
          <>
            <p>{topAnecdoteObj.anecdote}</p>
            <p>has {topAnecdoteObj.points} points</p>
          </>
        )}
      </section>
    </div>
  );
};
export default App;
