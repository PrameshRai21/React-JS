
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 0

  const addCounter = () => {
    counter = counter + 1
    if(counter <= 20){
      setCounter(counter)
    }else {
      setCounter(counter = 20)
    }

  }

  const subCounter = () => {
    if(counter > 0){
    setCounter(counter - 1)
  }else {
    setCounter(counter = 0)
  }
  }

  return (
    <>
      <h1>React Journey : {counter}</h1>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addCounter}>Increment</button>
      <button onClick={subCounter}>Decrement</button>
      <p>{counter}</p>
    </>
  )
}

export default App
