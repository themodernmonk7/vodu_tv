import React from "react"

const LoadingSkeleton = () => {
  return (
    <>
      <section className="container my-20 mx-auto grid grid-cols-1 place-items-center gap-5  sm:grid-cols-2 md:grid-cols-3 md:px-28 lg:grid-cols-3 xl:grid-cols-4">
        <div className=" relative w-3/5 animate-pulse   bg-gray-200 sm:w-3/4 md:w-11/12">
          <article className="h-80 w-full sm:h-80 md:h-72 xl:h-96">
            <p className="absolute top-3 left-3 animate-pulse rounded-sm bg-gray-400 px-8 py-3 text-xs font-bold uppercase text-black backdrop-blur-md"></p>
          </article>
        </div>
        <div className=" relative w-3/5 animate-pulse   bg-gray-200 sm:w-3/4 md:w-11/12">
          <article className="h-80 w-full sm:h-80 md:h-72 xl:h-96">
            <p className="absolute top-3 left-3 animate-pulse rounded-sm bg-gray-400 px-8 py-3 text-xs font-bold uppercase text-black backdrop-blur-md"></p>
          </article>
        </div>
        <div className=" relative w-3/5 animate-pulse   bg-gray-200 sm:w-3/4 md:w-11/12">
          <article className="h-80 w-full sm:h-80 md:h-72 xl:h-96">
            <p className="absolute top-3 left-3 animate-pulse rounded-sm bg-gray-400 px-8 py-3 text-xs font-bold uppercase text-black backdrop-blur-md"></p>
          </article>
        </div>
        <div className=" relative w-3/5 animate-pulse   bg-gray-200 sm:w-3/4 md:w-11/12">
          <article className="h-80 w-full sm:h-80 md:h-72 xl:h-96">
            <p className="absolute top-3 left-3 animate-pulse rounded-sm bg-gray-400 px-8 py-3 text-xs font-bold uppercase text-black backdrop-blur-md"></p>
          </article>
        </div>
        <div className=" relative w-3/5 animate-pulse   bg-gray-200 sm:w-3/4 md:w-11/12">
          <article className="h-80 w-full sm:h-80 md:h-72 xl:h-96">
            <p className="absolute top-3 left-3 animate-pulse rounded-sm bg-gray-400 px-8 py-3 text-xs font-bold uppercase text-black backdrop-blur-md"></p>
          </article>
        </div>
        <div className=" relative w-3/5 animate-pulse   bg-gray-200 sm:w-3/4 md:w-11/12">
          <article className="h-80 w-full sm:h-80 md:h-72 xl:h-96">
            <p className="absolute top-3 left-3 animate-pulse rounded-sm bg-gray-400 px-8 py-3 text-xs font-bold uppercase text-black backdrop-blur-md"></p>
          </article>
        </div>
      </section>
    </>
  )
}

export default LoadingSkeleton
