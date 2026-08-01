import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  const addValue = () => {
    console.log("clicked", counter)
    counter = counter +1
    setCounter(counter)
  }

  const removeValue = () =>{
    setCounter(counter -1)
  }

  return (
    <>
    <h1>Counter Project</h1>
    <h1>Counter Value: {counter}</h1>

    <br />
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
