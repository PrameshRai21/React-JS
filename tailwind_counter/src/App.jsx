import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  let incrementValue = () => {
    setCount(count + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
  }

  let decrementValue = () => {
    setCount(count-1)
  }

  return (
    <>
      <div className='flex flex-col border-2 border-slate-400 p-5 w-[500px] h-auto rounded-xl'>
        <h2 className='text-2xl font-bold text-white pb-3'>Counter in React using Tailwind CSS</h2>
        <hr />

        <h3 className='text-green-600 text-xl font-bold m-5'>Counter : {count}</h3>
        <div className='flex justify-around'>
          <button onClick={incrementValue}>Increase</button>
          <button onClick={decrementValue}>Decrease</button>
        </div>
      </div>

    </>
  )
}

export default App
