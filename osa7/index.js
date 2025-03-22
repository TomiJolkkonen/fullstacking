// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import useCounter from './hooks/useCounter';

const App = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Koti</Link> | <Link to="/about">Tietoa</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home count={count} increment={increment} decrement={decrement} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
