import React from "react"
import { Link } from "react-router-dom"
import poster from "../assets/Poster1.jpg"
const MoviesList = () => {
  return (
    <section className="container my-20 mx-auto grid place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link to={`/movie/:id`}>
        <article className="photo relative w-3/5 transform overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105 sm:w-3/4 md:w-4/5">
          <img
            src={poster}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <p className="absolute top-3 left-3 rounded-sm bg-yellow-400/80 px-3 py-1 text-xs font-bold text-black backdrop-blur-md">
            TV Series
          </p>
          <div className="photo-info  absolute bottom-0 flex h-32 w-full translate-y-full transform flex-col justify-center space-y-1 bg-white/5 px-8 text-gray-200 backdrop-blur-sm transition-all duration-300 ease-linear">
            <p className="text-sm tracking-wide">
              USA, <span className="text-yellow-400"> 2020 </span>
            </p>
            <h4 className="font-bold uppercase">Avengers Endgame</h4>
            <p className="text-gray-400">Adventure, Horror</p>
          </div>
        </article>
      </Link>
      <article className="photo relative w-3/5 transform overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105 sm:w-3/4 md:w-4/5">
        <img
          src={poster}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <p className="absolute top-3 left-3 rounded-sm bg-yellow-400/80 px-3 py-1 text-xs font-bold text-black backdrop-blur-md">
          TV Series
        </p>
        <div className="photo-info  absolute bottom-0 flex h-32 w-full translate-y-full transform flex-col justify-center space-y-1 bg-white/5 px-8 text-gray-200 backdrop-blur-sm transition-all duration-300 ease-linear">
          <p className="text-sm tracking-wide">
            USA, <span className="text-yellow-400"> 2020 </span>
          </p>
          <h4 className="font-bold uppercase">Avengers Endgame</h4>
          <p className="text-gray-400">Adventure, Horror</p>
        </div>
      </article>
      <article className="photo relative w-3/5 transform overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105 sm:w-3/4 md:w-4/5">
        <img
          src={poster}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <p className="absolute top-3 left-3 rounded-sm bg-yellow-400/80 px-3 py-1 text-xs font-bold text-black backdrop-blur-md">
          TV Series
        </p>
        <div className="photo-info  absolute bottom-0 flex h-32 w-full translate-y-full transform flex-col justify-center space-y-1 bg-white/5 px-8 text-gray-200 backdrop-blur-sm transition-all duration-300 ease-linear">
          <p className="text-sm tracking-wide">
            USA, <span className="text-yellow-400"> 2020 </span>
          </p>
          <h4 className="font-bold uppercase">Avengers Endgame</h4>
          <p className="text-gray-400">Adventure, Horror</p>
        </div>
      </article>
      <article className="photo relative w-3/5 transform overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-105 sm:w-3/4 md:w-4/5">
        <img
          src={poster}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <p className="absolute top-3 left-3 rounded-sm bg-yellow-400/80 px-3 py-1 text-xs font-bold text-black backdrop-blur-md">
          TV Series
        </p>
        <div className="photo-info  absolute bottom-0 flex h-32 w-full translate-y-full transform flex-col justify-center space-y-1 bg-white/5 px-8 text-gray-200 backdrop-blur-sm transition-all duration-300 ease-linear">
          <p className="text-sm tracking-wide">
            USA, <span className="text-yellow-400"> 2020 </span>
          </p>
          <h4 className="font-bold uppercase">Avengers Endgame</h4>
          <p className="text-gray-400">Adventure, Horror</p>
        </div>
      </article>
    </section>
  )
}

export default MoviesList
