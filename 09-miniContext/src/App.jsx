import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'


function App() {
 

  return (
   <div className="min-h-screen bg-gray-100">
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
