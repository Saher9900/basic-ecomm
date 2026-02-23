import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

 const AchContext = createContext();
 export default AchContext;

export const AchContextProvider = ({ children }) => {
  const [ach, setAch] = useState({});
  const [achLoading, setAchLoading] = useState(false);
  const achURL = "http://ecommercedb.runasp.net/api/Achievement";
  const getAch = async () => {
    setAchLoading(true);
    try {
      const { data } = await axios.get(achURL);
      setAch(data);
    } catch(err) {
      console.log(err);
    } finally {
      setAchLoading(false);
    }
  }
  return (
    <AchContext.Provider value={{ getAch, ach, achLoading }}>
      {children}
    </AchContext.Provider>
  )
}