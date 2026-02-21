import { createContext, useState } from "react";
import axios from "axios";

export const ProsContext = createContext()

export const ProsContextProvider = ({children}) => {

  const [pros, setPros] = useState([])
  const prosURL = "http://ecommercedb.runasp.net/api/products"
  const getPros = async () => {
    const {data} = await axios.get(prosURL)
    setPros(data)
    console.log(data)
  }

  return (
    <ProsContext.Provider value={{getPros, pros}}>
      {children}
    </ProsContext.Provider>
  )
}