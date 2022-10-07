import React, { useContext, useEffect, useState } from "react"

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_MOVIE_API_KEY
}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  const [query, setQuery] = useState("batman")

  // Fetch movies
  const fetchMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  }, [query])

  return <AppContext.Provider value="value">{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
