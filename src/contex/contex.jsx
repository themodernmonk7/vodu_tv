import React, { useContext, useEffect, useState } from "react"

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_MOVIE_API_KEY
}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [error, setError] = useState({ show: false, msg: "" })
  const [query, setQuery] = useState("batman")

  // Fetch movies
  const fetchMovies = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === "True") {
        setMovies(data.Search)
        setError({ show: false, msg: "" })
      } else {
        setError({ show: true, msg: data.Error })
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  }, [query])

  return (
    <AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
