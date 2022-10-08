import React from "react"
import MovieDetails from "./MovieDetails"
import MovieRating from "./MovieRating"

const MovieInfo = ({ movie }) => {
  const { Genre, Plot, Runtime, Title, Year } = movie
  return (
    <div className="my-10 space-y-4 lg:w-1/2 ">
      <h2 className="text-3xl font-bold md:text-5xl">{Title}</h2>
      <div className="flex space-x-4">
        <p className="flex items-center justify-center text-sm font-medium text-gray-400">
          {Year} • <span className="pl-1">{Runtime} • </span>{" "}
          <span className="pl-1">{Genre}</span>
        </p>
      </div>

      <MovieRating movie={movie} />
      <p className="pt-6 text-lg">{Plot}</p>
      <MovieDetails movie={movie} />
    </div>
  )
}

export default MovieInfo
