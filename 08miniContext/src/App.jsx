import UserContextProvider from './context/UserContextProvider'
import './App.css'
import UserContext from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>hello akif </h1>
      <Login />
      <Profile />
    </ UserContextProvider>
  )
}

export default App
