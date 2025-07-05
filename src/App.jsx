import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from '../components/Todo'
import TodoApp from '../components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo />
      {/* <TodoApp /> */}
    </>
  )
}

export default App
