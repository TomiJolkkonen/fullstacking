// src/components/Counter.tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  return (
    <div>
      <h2>Laskuri</h2>
      <p>Arvo: {count}</p>
      <button onClick={increment}>Lisää</button>
      <button onClick={decrement}>Vähennä</button>
    </div>
  );
};

export default Counter;
