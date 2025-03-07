import { useState } from "react";

const ActionButton = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);

const App = () => {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Do not worry about failure; you only have to be right once.",
    "It's not a bug, it's an undocumented feature.",
    "Any sufficiently advanced technology is indistinguishable from magic.",
    "There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    "Simplicity is the soul of efficiency.",
    "Before software can be reusable it first has to be usable.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [ratings, setRatings] = useState(new Array(quotes.length).fill(0));

  const voteForQuote = () => {
    const updatedRatings = [...ratings];
    updatedRatings[currentIndex] += 1;
    setRatings(updatedRatings);
  };

  const highestRatedQuoteIndex = ratings.indexOf(Math.max(...ratings));

  return (
    <div>
      <h1>Quote of the Moment</h1>
      <div>{quotes[currentIndex]}</div>
      <div>has {ratings[currentIndex]} votes</div>
      <ActionButton onClick={() => voteForQuote()} label="vote" />
      <ActionButton
        onClick={() =>
          setCurrentIndex(Math.floor(Math.random() * quotes.length))
        }
        label="next quote"
      />
      <h1>Most Voted Quote</h1>
      <div>{quotes[highestRatedQuoteIndex]}</div>
      <div>has {ratings[highestRatedQuoteIndex]} votes</div>
    </div>
  );
};

export default App;
