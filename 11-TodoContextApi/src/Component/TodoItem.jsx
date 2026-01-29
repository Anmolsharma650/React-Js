import { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function TodoItem({ todo }) {
  const [isEdit, setIsEdit] = useState(false)
  const [msg, setMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  return (
    <div
      className={`
        w-full md:w-1/2 max-w-xl mx-auto
        flex items-center gap-3 mt-5 p-3 rounded-xl
        shadow-md transition-all duration-300
        ${todo.completed ? 'bg-green-100' : 'bg-white'}
      `}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="w-5 h-5 accent-green-500 cursor-pointer"
      />

      {/* Todo Text */}
      <input
        value={msg}
        readOnly={!isEdit}
        onChange={(e) => setMsg(e.target.value)}
        className={`
          flex-1 bg-transparent px-2 py-1 rounded-md
          outline-none transition
          ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}
          ${isEdit ? 'border border-gray-300 bg-white' : 'border border-transparent'}
        `}
      />

      {/* Edit / Save Button */}
      <button
        onClick={() => {
          if (isEdit) updateTodo(todo.id, { todo: msg })
          setIsEdit(!isEdit)
        }}
        disabled={todo.completed}
        className="
          w-9 h-9 flex items-center justify-center
          rounded-lg border border-gray-200
          bg-gray-50 hover:bg-gray-100
          disabled:opacity-50
          transition
        "
      >
        {isEdit ? '💾' : '✏️'}
      </button>

      {/* Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="
          w-9 h-9 flex items-center justify-center
          rounded-lg border border-red-200
          bg-red-50 hover:bg-red-100
          transition
        "
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
