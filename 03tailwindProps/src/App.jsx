
import { useState } from 'react'
import Card from './components/card'
import Compprac from './components/compprac'
import Multiplepropsprac from './components/multiplepropsprac'
import Objectprops from './components/objectprops'
import Destructureprop from './components/destructureprop'


const myObj = {
  username: "Akif",
  age: 20
}

const student={
  name:"akif",
  age:20,
  cgpa:3.7
}

export default function App(props) {
  console.log(props)
  return (
    <>
    <Destructureprop student={student}/>
    <Objectprops student={student}/>
    <Multiplepropsprac name ="Azhar ali" age={20} city ="lahore"/>
    <Compprac name="Akif"/>
    <Compprac name="Ali"/>
    <Compprac name="Ahmad"/>
    <Card channel="akifnaveedmalik"/>
    <Card channel="Abdul" myobj={myObj}/>
    </>
    
  )
}
