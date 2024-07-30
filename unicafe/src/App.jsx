import { useState } from "react";

const FeedbackButton = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ text, value, children }) => {
  return (
    <p>
      {Number.isNaN(value)
        ? `Reviews are needed in order to calculate ${text}`
        : `${text} ${value}`}{" "}
      {children}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const total = bad + good + neutral;
  const average = (good - bad) / total;
  const positive = good / total;

  return (
    <main>
      <section>
        <h1>give feedback</h1>
        <div className="button-container">
          <FeedbackButton text={"good"} handleClick={() => setGood(good + 1)} />
          <FeedbackButton text={"bad"} handleClick={() => setBad(bad + 1)} />
          <FeedbackButton
            text={"neutral"}
            handleClick={() => setNeutral(neutral + 1)}
          />
        </div>
      </section>
      <section>
        <h1>statistics</h1>
        {total === 0 ? (
          <p>No feedback given</p>
        ) : (
          <div className="statistics-container">
            <Statistics text={"good"} value={good} />
            <Statistics text={"bad"} value={bad} />
            <Statistics text={"neutral"} value={neutral} />
            <Statistics text={"all"} value={total} />
            <Statistics text={"average"} value={average} />
            <Statistics text={"positive percentage"} value={positive * 100}>
              %
            </Statistics>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
