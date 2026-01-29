import { createContext, useContext } from "react"

const TodoContext = createContext()

export const TodoProvider = ({ children, value }) => {
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)
