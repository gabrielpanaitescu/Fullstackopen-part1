import { useState } from "react";

const FeedbackButton = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Stats = ({ text, value }) => {
  return (
    <>
      <p>
        {text} {value}
      </p>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <main>
      <section>
        <h1>give feedback</h1>
        <FeedbackButton text={"good"} handleClick={() => setGood(good + 1)} />
        <FeedbackButton text={"bad"} handleClick={() => setBad(bad + 1)} />
        <FeedbackButton
          text={"neutral"}
          handleClick={() => setNeutral(neutral + 1)}
        />
      </section>
      <section>
        <h1>statistics</h1>
        <Stats text={"good"} value={good} />
        <Stats text={"bad"} value={bad} />
        <Stats text={"neutral"} value={neutral} />
      </section>
    </main>
  );
};

export default App;
