import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  //useRef hook
  const passwordRef = useRef(null)
  
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


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,password.length)

    window.navigator.clipboard.writeText(password)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000);

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <div className=' parent min-h-screen bg-gradient-to-br from-slate-950 via-white-800 to-grey 
    flex items-center justify-center px-4'>
      <div className='card w-full max-w-xl rounded-3xl bg-slate-800/80 backdrop-blur-xl border border-slate-700 shadow-2xl p-8'>
      <h1 className='text-4xl text-center
      font-extrabold md:text-5xl text-white flex-center 
      tracking-tight'> Password Generator </h1>

      <p className='text-center test-slate-400 mt-3 text-sm m:text-base text-white'>Generate strong and secure passwords instantly</p>

      <div className='mt-8 rounded-2xl bg-slate-900/70 border border-slate-700/70 p-6 shadow-lg text-white'>
          <div className='passwordNote text-center mb-5 text-sm landing-relaxed text-slate-400'>Create a strong password using numbers and special characters</div>
          <div className=' passwordConatiner flex w-full overflow-hidden rounded-xl border border-slate-600 shadow-md'>
            <input 
              type="text" 
              value={password}
              className="inputBar w-full bg-slate-800 px-4 py-3 text-base font-medium tracking-wide text-white outline-none placeholder:text-slate-500"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard}
              className={`copyButton bg-indigo-600 px-5 py-3 font-3 font-semibold text-white transition-all duration-200 hover:bg-indigo-500 active:scale-95 cursor-pointer shrinl-0 
                ${copied 
                  ? "bg-emerald-600 hover:bg-emerald-500"
                  : "bg-indigo-600 hover:bg-indigo-500" }`}
                >
                  {copied? "Copied" : "Copy"}</button>
          </div>
          <div className='passwordGenrationControlersContainer mt-6 space-y-5'>
              <label className='lenghtLabel text-sm font-medium text-slate-300'>
                Length: <span className='lenghtValue ml-2 font-bold text-orange-400'>
                  {length}
                  </span>
                    </label>

            <div className='lenghtSlider flex items-center gap-2 justify-between mt-2'>
              <input 
                type="range"
                min={0}
                max={50}
                value={length}
                className='slider width-full cursor-pointer accent-orange-500'
                onChange={(e) => {
                  setLength( Number( e.target.value ) )
                }}
                />
            </div>
            <div className='flex flex-wrap items-center gap-6 border-t border-slate-700 pt-5'>
            <div className='numbersSection flex items-center gap-2'>
              <input
              className='numberCheck h-4 w-4 cursor-pointer accent-orange-500'
              type="checkbox" 
              id="numberInput"
              Checked={numberAllowed}
              onChange={() =>{
                setNumberAllowed((prev) => !prev);
              }} 
              />
              <label htmlFor="numberInput" 
              className='numberLabel cursor-pointer text-sm font-medium text-slate-300 select-none'>Numbers</label>
            </div>
            <div className='characterCheck flex items-center gap-2'>
              <input 
              className='characterInput h-4 w-4 cursoe-pointer accent-orange-500'
              type="checkbox" 
              Checked={characterAllowed} 
              id="characterInput"
              onChange = {() => {
                setCharacterAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="characterInput"
              className='characterLabel cursor-pointer text-sm font-medium text-slate-300 select-none'>Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
