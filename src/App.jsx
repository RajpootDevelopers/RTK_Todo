import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='text-neutral-700 text-lg uppercase font-bold underline'>Using By Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App;

