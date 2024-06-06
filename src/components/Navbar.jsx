import { NavLink } from "react-router-dom"
import logo from "../assets/react.svg"

export default function Navbar() {
  const navLinkClasses = ({isActive}) => { return isActive ? 'text-gray-50 bg-black hover:bg-gray-900 hover:text-gray-50 rounded-md px-3 py-2' : 'text-gray-900 hover:bg-gray-900 hover:text-gray-50 rounded-md px-3 py-2'}
  return (
    <nav className="bg-neutral-50 border-b border-sky-200 fixed z-50 top-0 left-0 right-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-gray-900 text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={navLinkClasses}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={navLinkClasses}
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/add-job"
                  className={navLinkClasses}
                  
                >
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
