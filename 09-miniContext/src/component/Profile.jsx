import React, { useContext } from 'react'
import Usercontext from '../context/UserContext'

function Profile() {
  const { user } = useContext(Usercontext)

  return (
    <div className="flex justify-center mt-6">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow p-4 text-center">
        
        {!user ? (
          <>
            <h2 className="text-lg font-semibold text-gray-800">
              Not Logged In
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Please login to continue
            </p>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-gray-800">
              Welcome
            </h2>
            <p className="text-blue-600 font-medium mt-1">
              {user.username}
            </p>
          </>
        )}

      </div>
    </div>
  )
}

export default Profile
