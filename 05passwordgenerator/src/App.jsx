import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str +="0123456789"
    if(characterAllowed) str += "!~`#$%^&*()_+{}|\[]-=':;?/.,><"

    for(let i =1; i<= length; i++){

      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }
    setPassword(pass)

  } ,[length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center
      font-popins font-bold text-white flex-center align-items-center p-4 my-8'> Password Generator </h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
        px-4 my-8 text-orange-500  bg-gray-700 p-4'>
          <div className='text-white text-center my-3 p-1'>Try Password Combo's using Char, No, Special Characters...</div>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
              type="text" 
              value={password}
              className="outline-none w-full py-1 px-3 bg-white text-black border-black-2px"
              placeholder="Password"
              readOnly
            />
            <button
            className='outline-none bg-blue-700 text-white 
              px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min={6}
                max={50}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                />

                <label> Length: {length}</label>
                
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() =>{
                setNumberAllowed((prev) => !prev);
              }} 
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked={characterAllowed} 
              id="characterInput"
              onChange = {() => {
                setCharacterAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
