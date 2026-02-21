import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const CatsContext = createContext()

export const CatContextProvider = ({children}) => {
  const catsURL = "http://ecommercedb.runasp.net/api/categories";
  const [cats, setCats] = useState([]);
  const getCats = async () => {
    try{
      const {data} = await axios.get(catsURL)
      setCats(data)
      console.log(data)
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <CatsContext.Provider value={{getCats, cats}}>
      {children}
    </CatsContext.Provider>
  )
}