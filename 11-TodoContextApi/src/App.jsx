import { useEffect, useState } from 'react'
import { TodoProvider } from './Context/TodoContext'
import TodoForm from './Component/TodoForm'
import TodoItem from './Component/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>
    setTodos(prev => [{ id: Date.now(), ...todo }, ...prev])

  const updateTodo = (id, todo) =>
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, ...todo } : t))
    )

  const deleteTodo = (id) =>
    setTodos(prev => prev.filter(t => t.id !== id))

  const toggleComplete = (id) =>
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="p-5">
        <TodoForm />
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </TodoProvider>
  )
}

export default App
