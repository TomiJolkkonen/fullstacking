import { useState } from "react";

// Button component for handling user interaction
const FeedbackButton = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);

// Statistics component that displays feedback summary
const FeedbackStatistics = ({ positiveFeedback, neutralFeedback, negativeFeedback }) => {
  const totalFeedback = positiveFeedback + neutralFeedback + negativeFeedback;
  const averageFeedback = totalFeedback > 0 ? calculateAverage((positiveFeedback - negativeFeedback) / totalFeedback) : 0;
  const positivePercentage = totalFeedback > 0 ? calculateAverage((positiveFeedback / totalFeedback) * 100) : 0;

  // If no feedback is given, display a message
  if (totalFeedback === 0) {
    return <div>No feedback provided yet</div>;
  }

  return (
    <table>
      <tbody>
        <FeedbackStatisticLine label="positive" value={positiveFeedback} />
        <FeedbackStatisticLine label="neutral" value={neutralFeedback} />
        <FeedbackStatisticLine label="negative" value={negativeFeedback} />
        <FeedbackStatisticLine label="total" value={totalFeedback} />
        <FeedbackStatisticLine label="average" value={averageFeedback} />
        <FeedbackStatisticLine label="positive feedback" value={positivePercentage + " %"} />
      </tbody>
    </table>
  );
};

// Individual line in the statistics table
const FeedbackStatisticLine = ({ label, value }) => (
  <tr>
    <td>{label}</td>
    <td>{value}</td>
  </tr>
);

// Helper function to round numbers to two decimal places
const calculateAverage = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

const App = () => {
  // State hooks to track feedback counts for each button
  const [positiveFeedback, setPositiveFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [negativeFeedback, setNegativeFeedback] = useState(0);

  return (
    <div>
      <h1>Give Your Feedback</h1>
      <FeedbackButton onClick={() => setPositiveFeedback(positiveFeedback + 1)} label="Positive" />
      <FeedbackButton onClick={() => setNeutralFeedback(neutralFeedback + 1)} label="Neutral" />
      <FeedbackButton onClick={() => setNegativeFeedback(negativeFeedback + 1)} label="Negative" />
      <h1>Feedback Statistics</h1>
      <FeedbackStatistics positiveFeedback={positiveFeedback} neutralFeedback={neutralFeedback} negativeFeedback={negativeFeedback} />
    </div>
  );
};

export default App;
