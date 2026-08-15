import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  return (
    <main className="app flex justify-center align-center mt-15 bg-[#111315]">
      <div className="todo-container text-white p-6">
        <h1 className='font-poppins font-8xl font-bold p-4'>Learn about Redux Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </main>
  )
}

export default App