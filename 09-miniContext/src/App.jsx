import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'


function App() {
 

  return (
   <div className="min-h-screen">
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
