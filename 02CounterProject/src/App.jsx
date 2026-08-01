import { useState } from 'react'
import './App.css'

// now according to the task the value of the counter cant exceed 20 adn cant be less than 0 (-ve)
function App() {

  let [counter, setCounter] = useState(0);
  const addValue = () => {
    
    if(counter >= 20){
      counter = 20
      setCounter(counter)
      console.log(`above 20 not allowed!`)
    }
    else{
      setCounter(counter + 1)
    }
  }

  const removeValue = () =>{
    if(counter <= 0){
      counter = 0
      setCounter(counter)
      console.log(`below 0 not allowed!`)
    }
    else{
      setCounter(counter - 1)
    }
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
