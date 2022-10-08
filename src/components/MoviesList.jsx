import React from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../contex/contex"

// No poster url
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const MoviesList = () => {
  const { loading, movies } = useGlobalContext()
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <section className="container my-20 mx-auto grid place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:px-28 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => {
        const { imdbID: id, Poster, Title, Type, Year } = movie
        return (
          <Link
            to={`/movie/${id}`}
            key={id}
            className="photo relative w-3/5  transform overflow-hidden bg-red-100 transition delay-150 duration-300 ease-in-out  hover:-translate-y-1 hover:scale-105 sm:w-3/4 md:w-11/12"
          >
            <article>
              <img
                src={Poster === 'N/A' ? url : Poster}
                alt={Title}
                className="h-full w-full object-cover object-center"
              />

              <p className="absolute top-3 left-3 rounded-sm bg-yellow-400/80 px-3 py-1 text-xs font-bold uppercase text-black backdrop-blur-md">
                {Type}
              </p>
              <div className="photo-info  absolute bottom-0 flex h-24 w-full translate-y-full transform flex-col justify-center space-y-1 bg-black/50 py-2 px-2 text-gray-200 backdrop-blur-sm transition-all duration-300 ease-linear">
                <p className="text-sm tracking-wide text-yellow-400"> {Year}</p>
                <h4 className="text-sm font-bold uppercase">{Title}</h4>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default MoviesList
