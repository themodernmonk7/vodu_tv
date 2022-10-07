import { Navbar, Footer, MoviesList, SingleMovie } from "./components"

function App() {
  return (
    <main className="h-screen overflow-auto bg-slate-900 text-white ">
      <section className="container mx-auto">
        <Navbar />
        {/* <MoviesList /> */}
        <SingleMovie />
      </section>
      <Footer />
    </main>
  )
}

export default App
