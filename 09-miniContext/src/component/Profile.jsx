import React, { useContext } from 'react'
import Usercontext from '../context/UserContext'

function Profile() {
  const { user } = useContext(Usercontext)

  return (
    <div className="  mt-4  flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-lg p-6 text-center">
        
        {!user ? (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Not Logged In
            </h2>
            <p className="text-gray-600">
              Please login to see your profile
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Welcome 
            </h2>
            <p className="text-lg text-blue-600 font-medium">
              {user.username}
            </p>
          </>
        )}

      </div>
    </div>
  )
}

export default Profile
