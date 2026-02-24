import { createContext, useState } from "react";
import axios from "axios";
import { proxyImageUrl } from "../utils/imageUrl.js";

export const FeatContext = createContext()

export const FeatContextProvider = ({children}) => {

  const [pros, setPros] = useState([])
  const [prosLoading, setProsLoading] = useState(false)
  const prosURL = "/api/FeaturedProducts";
  const getPros = async () => {
    setProsLoading(true)
    try {
      const {data} = await axios.get(prosURL)
      setPros(Array.isArray(data) ? data.map((pro) => ({ ...pro, image: proxyImageUrl(pro?.image) })) : data)
      console.log(data)
    } finally {
      setProsLoading(false)
    }
  }

  return (
    <FeatContext.Provider value={{getPros, pros, prosLoading}}>
      {children}
    </FeatContext.Provider>
  )
}