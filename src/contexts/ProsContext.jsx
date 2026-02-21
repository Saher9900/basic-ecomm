import { createContext, useState } from "react";
import axios from "axios";
import { proxyImageUrl } from "../utils/imageUrl.js";

export const ProsContext = createContext()

export const ProsContextProvider = ({children}) => {

  const [pros, setPros] = useState([])
  const [prosLoading, setProsLoading] = useState(false)
  const prosURL = "/api/products";
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
    <ProsContext.Provider value={{getPros, pros, prosLoading}}>
      {children}
    </ProsContext.Provider>
  )
}