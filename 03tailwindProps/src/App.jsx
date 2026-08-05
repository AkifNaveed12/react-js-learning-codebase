
import { useState } from 'react'
import Card from './components/card'
import Compprac from './components/compprac'
import Multiplepropsprac from './components/multiplepropsprac'


const myObj = {
  username: "Akif",
  age: 20
}
export default function App(props) {
  console.log(props)
  return (
    <>
    <Multiplepropsprac name ="Azhar ali" age={20} city ="lahore"/>
    <Compprac name="Akif"/>
    <Compprac name="Ali"/>
    <Compprac name="Ahmad"/>
    <Card channel="akifnaveedmalik"/>
    <Card channel="Abdul" myobj={myObj}/>
    </>
    
  )
}
