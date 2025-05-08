import { createContext, ReactNode, useContext, useState } from "react";

type User = 'user' | 'admin' | null

type ContextType = {
  user: User,
  handleLogin: (username: string, password: string) => boolean,
  handleLogout: () => void
}

const AuthContext = createContext<ContextType | null>(null)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps){
  const [user, setUser] = useState<User>('user')

  // TODO: Store the session in a storage

  function handleLogin(username: string, password: string): boolean {
    const savedCredentials = {
      username: import.meta.env.VITE_APP_USERNAME,
      password: import.meta.env.VITE_APP_PASSWORD
    }

    if(savedCredentials.username && savedCredentials.password){
      if(savedCredentials.username === username && savedCredentials.password === password){
        setUser('admin')
        return true
      }
    }

    return false
  }

  function handleLogout(){
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if(!context){
    throw new Error('useAuth must be called within AuthProvider')
  }

  return context
}