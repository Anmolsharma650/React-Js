import React, { useState, useContext } from 'react'
import Usercontext from '../context/UserContext'

function Login() {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const { setUser } = useContext(Usercontext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username: Username, password: Password })
  }

  return (
    <div className="   flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-lg p-6">
    
    <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
      Login
    </h2>

    <div className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg
                   hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </div>

  </div>
</div>

  )
}

export default Login
