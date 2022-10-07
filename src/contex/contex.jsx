import React, { useContext } from "react"

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=78d635b0`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="value">{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
