import { useState } from 'react'
import './App.css'

function App() {
  let counter = 0

  let [counter, setCounter] = useState();
  const addValue = () => {
    console.log("clicked", counter)
    counter = counter +1
    setCounter(counter)
  }


  return (
    <>
    <h1>Counter Project</h1>
    <h1>Counter Value: {counter}</h1>

    <br />
    <button onClick={addValue}>Add Value</button>
    <br />
    <button>Remove Value</button>
    </>
  )
}

export default App
