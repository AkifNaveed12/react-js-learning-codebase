import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>

          <div >
          <h1 className="justify-center bold-5px font-poppins align-center flex flex-wrap size-3xl p-14 ">Hello! im Akif</h1>
            </div>

          <div className="fixed flex flex-wrap 
            justify-center bottom-12 inset-x-0 px-2" >

              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white 
                px-3 py-2 rounded-3xl">

                  <button 
                  onClick={() => setColor("red")}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor:"red" }}>Red</button>

                  <button 
                  onClick={() => setColor("green")}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor:"green" }}>Green</button>

                  <button 
                  onClick={() => setColor("Blue")}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor:"blue" }}>Blue</button>

                  <button 
                  onClick={() => setColor("Grey")}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor:"grey" }}>Grey</button>

                  <button 
                  onClick={() => setColor("Yellow")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor:"Yellow" }}>Yellow</button>

                  <button 
                  onClick={() => setColor("White")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor:"White" }}>White</button>

                  <button 
                  onClick={() => setColor("Pink")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor:"Pink" }}>Pink</button>


            </div>
        </div>
      </div>
      
  )
}

export default App
