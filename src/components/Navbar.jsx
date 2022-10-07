import React from "react"
import Logo from "./Logo"
import { AiOutlineSearch } from "react-icons/ai"

const Navbar = () => {
  return (
    <nav className="mt-8 flex items-center justify-between">
      {/* right */}
      <div className="flex w-full flex-col items-center space-y-4 md:w-2/3 md:flex-row md:space-y-0 md:space-x-16 ">
        <Logo />
        <form className=" w-full px-8 md:px-0">
          <div className="relative flex items-center text-gray-500 focus-within:text-white">
            <AiOutlineSearch className="pointer-events-none absolute ml-3 h-5 w-5" />{" "}
            <input
              type="text"
              placeholder="Search for Movies, TV Series, Celebrities & more"
              className="w-full border-none bg-slate-800 py-3 px-4 pr-3 pl-10 text-white  placeholder:text-gray-500 focus:outline-none  focus:ring-2 focus:ring-yellow-400/50 "
            />{" "}
          </div>
        </form>
      </div>
      {/* left */}
      <div className="hidden space-x-10 md:flex">
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  )
}

export default Navbar
