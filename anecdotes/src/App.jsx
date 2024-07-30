import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // const transformedAnecdotes = anecdotes.reduce((accum, currValue, index) => {
  //   accum[index] = { anecdote: currValue, points: 0 };
  //   return accum;
  // }, {});
  // console.log(transformedAnecdotes);
  // console.log(
  //   Math.max(...Object.values(transformedAnecdotes).map((item) => item.points))
  // );

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    Object.fromEntries(Array.from({ length: 8 }, (_, i) => [i, 0]))
  );

  const pointsArr = Object.values(points);
  const maxValue = Math.max(...pointsArr);
  const topAnecdote = anecdotes[pointsArr.indexOf(maxValue)];

  const handleVote = () => {
    setPoints((prevPoints) => {
      return {
        ...prevPoints,
        [selected]: prevPoints[selected] + 1,
      };
    });
  };

  const handleNext = () => {
    const randomNumber = Math.floor(Math.random() * 8);
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
