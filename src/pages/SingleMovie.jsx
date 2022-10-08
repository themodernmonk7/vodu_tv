import React from "react"
import { Link } from "react-router-dom"
import { Logo, SingleMovieInfo } from "../components"
const SingleMovie = () => {
  return (
    <>
      <div className="mt-8 text-center">
        <Logo />
      </div>
      <SingleMovieInfo />
      <div className="my-10 flex items-center justify-center">
        <Link to="/">
          <button className="bg-yellow-400 px-6 py-1 font-semibold uppercase text-black hover:bg-yellow-500/90">
            Back to Home
          </button>
        </Link>
      </div>
    </>
  )
}

export default SingleMovie
