import React from "react"
import { BsStarFill } from "react-icons/bs"
import { SiRottentomatoes } from "react-icons/si"

const MovieRating = ({ movie }) => {
  const { Rated, Ratings } = movie
  const [IMDB, RottenTomatoes] = Ratings
  return (
    <div className="flex justify-start  pt-2 text-gray-400">
      <div className="flex flex-col space-y-1 border-r border-gray-400 pr-5">
        <p className="flex items-center justify-center font-bold text-gray-300 ">
          {IMDB.Value}
          <span className="pl-1 text-xs text-yellow-500">
            <BsStarFill />{" "}
          </span>
        </p>
        <p className="text-xs">IMDB Rating</p>
      </div>
      <div className="flex flex-col space-y-1 border-r border-gray-400 px-5">
        <p className="flex items-center justify-center font-bold text-gray-300">
          <span className="pr-1 text-xs text-red-600">
            <SiRottentomatoes />
          </span>
          {RottenTomatoes.Value}
        </p>
        <p className="text-xs">Rotten Tomatoes</p>
      </div>

      <div className="border-r-none flex flex-col  items-center space-y-1 px-5">
        <p className="font-bold text-gray-300"> {Rated} </p>
        <p className="text-xs">Rating</p>
      </div>
    </div>
  )
}

export default MovieRating
