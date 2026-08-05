
import { useState } from 'react'
import Card from './components/card'

const myObj = {
  username: "Akif",
  age: 20
}
export default function App(props) {
  console.log(props)
  return (
    <>
    <Card channel="akifnaveedmalik"/>
    <Card channel="abcdefg" myobj={myObj}/>
    </>
    
  )
}
