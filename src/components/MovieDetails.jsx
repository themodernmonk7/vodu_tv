import React from "react"

const MovieDetails = () => {
  return (
    <div className="space-y-4 pt-6">
      <p className="border-b-2  border-yellow-400 pb-2">
        Language :{" "}
        <span className="text-gray-400">English, Japanese, Xhosa, German</span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Actors :{" "}
        <span className="text-gray-400">
          Robert Downey Jr., Chris Evans, Mark Ruffalo
        </span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Director :{" "}
        <span className="text-gray-400">Anthony Russo, Joe Russon</span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Writer :{" "}
        <span className="text-gray-400">
          Christopher Markus, Stephen McFeely, Stan Lee
        </span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Awards :{" "}
        <span className="text-gray-400">
          Nominated for 1 Oscar. 70 wins & 132 nominations total
        </span>
      </p>
      <p className="border-b-2  border-yellow-400 pb-4">
        Country : <span className="text-gray-400">United States</span>
      </p>
    </div>
  )
}

export default MovieDetails
