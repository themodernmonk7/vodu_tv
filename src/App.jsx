import { Navbar, Footer } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Error, SingleMovie } from "./pages"
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
