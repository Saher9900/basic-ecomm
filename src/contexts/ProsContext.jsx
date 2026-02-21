import { createContext, useState } from "react";
import axios from "axios";
import { proxyImageUrl } from "../utils/imageUrl.js";

export const ProsContext = createContext()

export const ProsContextProvider = ({children}) => {

  const [pros, setPros] = useState([])
  const prosURL = "/api/products";
  const getPros = async () => {
    const {data} = await axios.get(prosURL)
    setPros(Array.isArray(data) ? data.map((pro) => ({ ...pro, image: proxyImageUrl(pro?.image) })) : data)
    console.log(data)
  }

  return (
    <ProsContext.Provider value={{getPros, pros}}>
      {children}
    </ProsContext.Provider>
  )
}