import React from "react"

const Title = () => {
  return (
    <section className=" container mx-auto w-full md:px-20">
      {/* Top section */}
      {/* flex flex-col lg:flex-row justify-center items-center mt-20 lg:space-x-20 space-y-8 px-4 md:px-0 */}
      <div className="mt-20 grid place-items-center gap-10 px-8 lg:grid-cols-2">
        {/* right */}
        <div className="  flex items-center justify-center text-3xl font-bold uppercase sm:text-5xl">
          <h2 className="">
            {" "}
            <span className="text-yellow-400"> The first</span> online streaming
            movie search engine
          </h2>
        </div>
        {/* left */}
        <div className=" text-sm text-gray-400  ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            commodi odio assumenda sunt cupiditate fuga magnam omnis nam
            praesentium nulla iusto saepe maxime repellendus ipsa earum suscipit
            deserunt,
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            voluptate quisquam distinctio recusandae illo beatae alias soluta
            debitis praesentium inventore.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Title
