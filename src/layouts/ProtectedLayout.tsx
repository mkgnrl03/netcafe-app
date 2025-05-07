import { Outlet, useNavigate } from "react-router"
import { useAuth } from "../context/AuthContext"

export default function ProtectedLayout() {
  const { user, handleLogout } = useAuth()

  const navigate = useNavigate()
  if(!user && user === 'user') {
   navigate("/session")
  }

  function logoutHandler() {
    handleLogout()
    navigate("/session")
  }



  return (
    <>
      <header className="flex justify-between items-center">
        <h1>NetCafe101</h1>
        <button 
          className="cursor-pointer bg-red-500 py-1 px-4 rounded-md"
          onClick={logoutHandler}
        >
          Logout
        </button>    
      </header>
      <Outlet />
    </>
  )
}
