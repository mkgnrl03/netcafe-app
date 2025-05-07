import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router"

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { handleLogin } = useAuth()
  const navigate = useNavigate()

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault()
      setErrorMessage('')
      const form = event.currentTarget
      const formData = form.elements as typeof form.elements & {
        username: { value: string },
        password: { value: string }
      }
      
      const { username, password } = formData

      if(username.value && password.value){
        const isLoggedIn = handleLogin(username.value as string, password.value as string)
        if(!isLoggedIn) {
          setErrorMessage("Invalid username and password")
          formData.username.value = ""
          formData.password.value = ""
          return 
        }
        navigate("/admin")
        return
      }

      setErrorMessage("Fields cannot be empty!")
      formData.username.value = ""
      formData.password.value = ""
      return "error"
  }

  return (
    <div className="w-full h-fit">
      <div 
        className="
          rounded-lg bg-gradient-to-tl from-pink-500 to-indigo-700 p-1
          max-w-[400px] mx-auto mt-6 lg:mt-24
        "
      >
      <form 
        className="bg-gray-950/95 p-6 rounded-md flex flex-col gap-2"
        onSubmit={handleFormSubmit}
      >
        <h1 className="font-semibold text-3xl tracking-wider text-center mb-2">Login</h1>
        {
          errorMessage ? <ErrorCard message={errorMessage}/> : ''
        }
        <label 
          htmlFor="username"
          className="font-normal text-sm"
        >
          Username: 
        </label>
        <input 
          type="text" 
          name="username" 
          className="border border-black rounded py-1 px-2 text-sm"
          placeholder="Enter your username"
        />
         <label 
          htmlFor="password"
          className="font-normal text-sm"
        >
          Password: 
        </label>
        <input 
          type="password" 
          name="password" 
          className="border border-black rounded py-1 px-2 text-sm"
          placeholder="Enter your password"
        />
        <button
          className="font-semibold bg-blue-800/50 cursor-pointer py-2 px-4 rounded text-white mt-6"
          type="submit"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  )
}

type ErrorCardProps = {
  message: string
}

function ErrorCard({ message }: ErrorCardProps){
  return (
    <div 
      className="mb-4 text-center text-sm p-2 rounded-md bg-red-200 border border-red-500 text-red-500"
    >
      <p>{message}</p>
    </div>
  )
}
