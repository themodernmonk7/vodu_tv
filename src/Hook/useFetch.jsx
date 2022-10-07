import { useEffect, useState } from "react"

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_MOVIE_API_KEY
}`

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState({ show: false, msg: "" })

  // Fetch movies
  const fetchMovies = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === "True") {
        setData(data.Search || data)
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
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])

  return { loading, data, error }
}

export default useFetch
