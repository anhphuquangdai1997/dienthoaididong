import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contex/AuthContext'

const Profile = () => {
  const { isAuthenticated,currentUser } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  if (!currentUser) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen fixed top-0 left-0 bg-white">
  {/* Left Container */}
  <div className="flex flex-col justify-center items-center flex-1">
    <h1 className="text-gray-600 font-medium text-[2.2vmax] -translate-x-[10vmax] -translate-y-[2vmax]">
      My Profile
    </h1>
    <img
      src={currentUser.avatar.url}
      alt={currentUser.name}
      className="w-[20vmax] rounded-full transition-transform duration-500 hover:scale-105"
    />
    <Link
      to="/me/update" state={currentUser}
      className="bg-red-500 text-white text-center font-roboto text-[1vmax] py-[0.5vmax] w-[30%] my-[4vmax] transition-all duration-500 hover:bg-red-600"
    >
      Edit Profile
    </Link>
  </div>

  {/* Right Container */}
  <div className="flex flex-col justify-evenly items-start p-[5vmax] box-border flex-1">
    <div>
      <h4 className="text-black font-roboto text-[1.2vmax] font-normal">Full Name</h4>
      <p className="text-gray-400 font-cursive text-[1vmax] my-[0.2vmax]">{currentUser.name}</p>
    </div>
    <div>
      <h4 className="text-black font-roboto text-[1.2vmax] font-normal">Email</h4>
      <p className="text-gray-400 font-cursive text-[1vmax] my-[0.2vmax]">{currentUser.email}</p>
    </div>
    <div>
      <h4 className="text-black font-roboto text-[1.2vmax] font-normal">Joined On</h4>
      <p className="text-gray-400 font-cursive text-[1vmax] my-[0.2vmax]">
      {String(currentUser.createdAt).substring(0, 10)}
      </p>
    </div>

    <div className="flex flex-col w-[60%]">
      <Link
        to="/cart"
        className="bg-gray-700 text-white text-center font-roboto text-[1vmax] py-[0.5vmax] my-[1vmax] transition-all duration-500 hover:bg-gray-800"
      >
        My Orders
      </Link>
      <Link
        to="/password/update"
        className="bg-gray-700 text-white text-center font-roboto text-[1vmax] py-[0.5vmax] my-[1vmax] transition-all duration-500 hover:bg-gray-800"
      >
        Change Password
      </Link>
    </div>
  </div>
</div>

  )
}

export default Profile
