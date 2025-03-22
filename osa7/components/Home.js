// components/Home.js
import React from 'react';

const Home = ({ count, increment, decrement }) => (
  <div>
    <h1>Kotisivu</h1>
    <p>Laskuri: {count}</p>
    <button onClick={increment}>Lisää</button>
    <button onClick={decrement}>Vähennä</button>
  </div>
);

export default Home;
