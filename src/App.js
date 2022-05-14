import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) => count + 1);
  }, [setCount]);

  return <h1>Multi Step Form</h1>;
}

export default App;
