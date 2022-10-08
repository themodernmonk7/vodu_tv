import React from "react"

const LoadingSpinner = () => {
  return (
    <>
      <div className="my-28 flex animate-bounce items-center justify-center space-x-4">
        <div className="h-8 w-8 rounded-full bg-yellow-400"></div>
        <div className="h-8 w-8 rounded-full bg-white"></div>
        <div className="h-8 w-8 rounded-full bg-gray-400"></div>
      </div>
    </>
  )
}

export default LoadingSpinner
