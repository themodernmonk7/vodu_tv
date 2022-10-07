import React from "react"

const MovieDetails = ({ movie }) => {
  const { Actors, Awards, Country, Director, Language, Rated, Writer } = movie
  return (
    <div className="space-y-4 pt-6">
      <p className="border-b-2  border-yellow-400 pb-2">
        Language : <span className="text-gray-400"> {Language} </span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Actors : <span className="text-gray-400">{Actors}</span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Director : <span className="text-gray-400"> {Director} </span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Writer : <span className="text-gray-400">{Writer}</span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Awards : <span className="text-gray-400">{Awards}</span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Country : <span className="text-gray-400">{Country} </span>
      </p>
    </div>
  )
}

export default MovieDetails
