import React from "react"
import poster from "../assets/Poster1.jpg"
import MovieInfo from "./MovieInfo"

const SingleMovie = () => {
  return (
    <>
      <section className=" my-20">
        <div className="flex flex-col items-center justify-center px-8 sm:px-0 lg:flex-row">
          {/* right */}
          <div className="flex items-center justify-center lg:w-1/2 ">
            <img
              src={poster}
              alt=""
              className="h-full transform object-cover object-center  shadow-lg shadow-yellow-400/30 transition duration-700 ease-in-out hover:translate-x-12 hover:skew-y-3 lg:w-96"
            />
          </div>
          <MovieInfo />
          {/* left */}
        </div>
      </section>
    </>
  )
}

export default SingleMovie
