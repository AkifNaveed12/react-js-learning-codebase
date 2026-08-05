import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text black p-4 m-20'> Hello World</h1>
    </>
  )
}

export default App
