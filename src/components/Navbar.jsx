import React from "react"
import Logo from "./Logo"
import { AiOutlineSearch } from "react-icons/ai"
import { useGlobalContext } from "../contex/contex"

const Navbar = () => {
  const { query, setQuery, error } = useGlobalContext()
  return (
    <nav className="flow-row container mx-auto mt-8 flex items-center justify-between  md:px-28">
      {/* right */}
      <div className="flex w-full flex-col items-center justify-center space-y-4  md:flex-row md:space-y-0 md:space-x-10 lg:w-3/4 ">
        <Logo />
        <form className=" w-full  px-8 md:px-0">
          <div className="relative flex items-center  text-gray-500 focus-within:text-white">
            <AiOutlineSearch className="pointer-events-none absolute ml-3 h-5 w-5" />{" "}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for Movies, TV Series, Celebrities & more"
              className="w-full border-none bg-slate-800 py-3 px-4 pr-3 pl-10 text-white  placeholder:text-gray-500 focus:outline-none  focus:ring-2 focus:ring-yellow-400 "
            />{" "}
          </div>
          {error.show && <p className=" text-red-500"> {error.msg} </p>}
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
