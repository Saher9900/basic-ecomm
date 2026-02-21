import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { proxyImageUrl } from "../utils/imageUrl.js";
import { getApiBase } from "../utils/api.js";

export const CatsContext = createContext()

export const CatContextProvider = ({children}) => {
  const catsURL = `${getApiBase()}/api/categories`;
  const [cats, setCats] = useState([]);
  const [catsLoading, setCatsLoading] = useState(false);
  const getCats = async () => {
    setCatsLoading(true);
    try {
      const {data} = await axios.get(catsURL)
      setCats(Array.isArray(data) ? data.map((cat) => ({ ...cat, image: proxyImageUrl(cat?.image) })) : data)
      console.log(data)
    } catch(err) {
      console.log(err);
    } finally {
      setCatsLoading(false);
    }
  }
  return (
    <CatsContext.Provider value={{getCats, cats, catsLoading}}>
      {children}
    </CatsContext.Provider>
  )
}