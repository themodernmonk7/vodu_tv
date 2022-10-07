import React from "react"
import MovieDetails from "./MovieDetails"
import MovieRating from "./MovieRating"

const MovieInfo = () => {
  return (
    <div className="my-10 space-y-4 lg:w-1/2 ">
      <h2 className="text-3xl font-bold md:text-5xl">Avengers: Endgame</h2>
      <div className="flex space-x-4">
        <p className="flex items-center justify-center text-sm font-medium text-gray-400">
          2019 • <span className="pl-1">181 min • </span>{" "}
          <span className="pl-1">Action, Adventure</span>
        </p>
      </div>

      <MovieRating />
      <p className="pt-6 text-lg">
        After the devastating events of Avengers: Infinity War (2018), the
        universe is in ruins. With the help of remaining allies, the Avengers
        assemble once more in order to reverse Thanos' actions and restore
        balance to the universe.
      </p>
      <MovieDetails />
    </div>
  )
}

export default MovieInfo
