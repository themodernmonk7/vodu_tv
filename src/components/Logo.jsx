import React from "react"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <>
      <Link to="/">
        <h1 className=" py-2 text-3xl font-bold uppercase">
          <span className="text-yellow-400">vodutv</span>
          <span className="text-gray-300">.com</span>
        </h1>
      </Link>
    </>
  )
}

export default Logo
