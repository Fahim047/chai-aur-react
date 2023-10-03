import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  const addValue = () => {
    count === 20 ? setCount(count) : setCount(count + 1);
    // setCount(count + 1);
  };
  const removeValue = () => {
    count === 0 ? setCount(count) : setCount(count - 1);
    // setCount(count - 1);
  };
  return (
    <>
      <h4>Counter: {count}</h4>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <h4>Counter: {count}</h4>
    </>
  )
}

export default App
