import React from "react"

const Title = () => {
  return (
    <section className=" container mx-auto w-full md:px-20">
      {/* Top section */}
      {/* flex flex-col lg:flex-row justify-center items-center mt-20 lg:space-x-20 space-y-8 px-4 md:px-0 */}
      <div className="mt-20 grid place-items-center gap-10 px-8 lg:grid-cols-2">
        {/* right */}
        <div className="  flex items-center justify-center text-3xl font-bold uppercase md:text-5xl">
          <h2 className="">
            {" "}
            <span className="text-yellow-400"> The first</span> online streaming
            movie search engine
          </h2>
        </div>
        {/* left */}
        <div className=" text-sm text-gray-400  ">
          <p>
            VODUTV is a free app that helps people find movies and shows they
            want to watch. We have over 1 million titles and we're adding
            content daily. You can use our app to browse movies, tv shows,
            documentaries, anime, cartoons, live streams, music videos and much
            more!
          </p>
          <br />
          <p>
            VODUTV is a free online video search engine that allows users to
            find videos based on keywords. Users can search any type of video
            including movies, music videos, documentaries, short films, etc.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Title
