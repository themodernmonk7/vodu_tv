import React from "react"
import { Link, useParams } from "react-router-dom"
import useFetch from "../useFetch"
import MovieInfo from "./MovieInfo"
import LoadingSpinner from "./LoadingSpinner"

// No poster url
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"

const SingleMovieInfo = () => {
  const { id } = useParams()
  const { loading, error, data: movie } = useFetch(`&i=${id}`)

  if (loading) return <LoadingSpinner />

  if (error.show) {
    return (
      <div>
        <h1>{error.msg}</h1>
        <Link to="/">Back to movies</Link>
      </div>
    )
  }

  const { Poster, Title } = movie
  return (
    <>
      <section className=" container mx-auto my-10 px-8 sm:px-0">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          {/* right */}
          <div className=" flex items-center justify-center lg:w-1/2 ">
            <img
              src={Poster === "N/A" ? url : Poster}
              alt={Title}
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
