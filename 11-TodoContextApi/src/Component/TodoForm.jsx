import { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function TodoForm() {
  const [text, setText] = useState('')
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!text) return
    addTodo({ todo: text, completed: false })
    setText('')
  }

  return (
    <>
    <div>
        <h1 className='text-4xl text-white text-center mb-9'>Manage Your Tools</h1>
    </div>
    <div className=" flex items-center justify-center">
  <form
    onSubmit={add}
    className="w-1/2 flex items-center gap-3
               bg-gray-700 backdrop-blur-md
               p-3 rounded-xl shadow-lg"
  >
    <input
      type="text"
      placeholder="Write your todo..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="
        flex-1 px-4 py-2 rounded-lg
        bg-white text-black placeholder-white/70
        border border-white/20
        focus:outline-none focus:ring-2 focus:ring-white
        transition duration-200
      "
    />

    <button
      type="submit"
      className="
        px-5 py-2 rounded-lg font-medium
        bg-gradient-to-r from-green-400 to-green-600
        hover:from-green-500 hover:to-green-700
        active:scale-95
        transition-all duration-200
        shadow-md shadow-green-500/30
      "
    >
      Add
    </button>
  </form>
</div>
</>
  )
}

export default TodoForm
