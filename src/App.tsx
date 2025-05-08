import { AuthContextProvider } from "./context/AuthContext"
import { BrowserRouter, Route, Routes } from 'react-router'
import AuthLayout from "./layouts/AuthLayout"
import LoginPage from "./pages/auth/LoginPage"
import ProtectedLayout from "./layouts/ProtectedLayout"
import HomePage from "./pages/protected/HomePage"
import TimerPage from "./pages/client/TimerPage"

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<TimerPage />} />
          
          {/* Unprotected Routes */}
          <Route path="session" element={<AuthLayout />}>
            <Route index element={<LoginPage />} />
          </Route>

          {/* Protected Routes */}
          <Route path="admin" element={<ProtectedLayout />}>
             <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
