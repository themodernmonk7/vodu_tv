import React from "react"
import { Link, useParams } from "react-router-dom"
import useFetch from "../Hook/useFetch"
import MovieInfo from "./MovieInfo"

const SingleMovieInfo = () => {
  const { id } = useParams()
  const { loading, error, data: movie } = useFetch(`&i=${id}`)

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error.show) {
    return (
      <div className="">
        <h1>{error.msg}</h1>
        <Link to="/">Back to movies</Link>
      </div>
    )
  }

  const { Poster } = movie
  return (
    <>
      <section className=" container my-20 mx-auto">
        <div className="flex flex-col items-center justify-center px-8 sm:px-0 lg:flex-row">
          {/* right */}
          <div className="flex items-center justify-center lg:w-1/2 ">
            <img
              src={Poster}
              alt=""
              className="h-full transform object-cover object-center  shadow-lg shadow-yellow-400/30 transition duration-700 ease-in-out hover:translate-x-12 hover:skew-y-3 lg:w-96"
            />
          </div>
          <MovieInfo movie={movie} />
          {/* left */}
        </div>
      </section>
    </>
  )
}

export default SingleMovieInfo
