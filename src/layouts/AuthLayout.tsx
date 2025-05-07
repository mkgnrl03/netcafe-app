import { NavLink, Outlet } from "react-router"
import { Undo2 } from "lucide-react"

export default function AuthLayout() {
  return (
    <>
      <header>
        <nav className="p-4 max-w-7xl m-auto">
          <NavLink 
            to={"/"}
            className="flex gap-2 items-center font-bold text-lg font-sans"
          > 
            <Undo2 />
            <p>Go Back</p>
          </NavLink>
        </nav>
      </header>
      <section className="max-w-5xl m-auto px-8 py-4">
        <Outlet />
      </section>
    </>
  )
}
