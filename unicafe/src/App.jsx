import { useState } from "react";

const FeedbackButton = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ text, value, children }) => {
  return (
    <>
      {Number.isNaN(value) ? (
        <tr>
          <td>Reviews are needed in order to calculate {text}</td>
        </tr>
      ) : (
        <tr>
          <td>{text}</td>
          <td>
            {value} {children}
          </td>
        </tr>
      )}
    </>
  );
};

const Statistics = ({ good, bad, neutral, total, average, positive }) => {
  return (
    <table className="statistics-table">
      <tbody>
        <StatisticsLine text={"good"} value={good} />
        <StatisticsLine text={"bad"} value={bad} />
        <StatisticsLine text={"neutral"} value={neutral} />
        <StatisticsLine text={"all"} value={total} />
        <StatisticsLine text={"average"} value={average} />
        <StatisticsLine text={"positive percentage"} value={positive * 100}>
          %
        </StatisticsLine>
      </tbody>
    </table>
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
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            average={average}
            positive={positive}
          />
        )}
      </section>
    </main>
  );
};

export default App;
