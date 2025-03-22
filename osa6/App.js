// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './reducers/counterReducer';

const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Laskuri: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Lisää</button>
      <button onClick={() => dispatch(decrement())}>Vähennä</button>
    </div>
  );
};

export default App;
