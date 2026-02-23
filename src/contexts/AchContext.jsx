import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { proxyImageUrl } from "../utils/imageUrl.js";

const AchContext = createContext();
export default AchContext;

export const AchContextProvider = ({ children }) => {
  const [ach, setAch] = useState({});
  const [achLoading, setAchLoading] = useState(false);
  const achURL = "/api/achievement";

  const getAch = async () => {
    setAchLoading(true);
    try {
      const { data } = await axios.get(achURL);
      const normalized =
        data && typeof data === "object"
          ? { ...data, image: proxyImageUrl(data?.image) }
          : data;
      setAch(normalized);
    } catch (err) {
      console.log(err);
    } finally {
      setAchLoading(false);
    }
  };

  return (
    <AchContext.Provider value={{ getAch, ach, achLoading }}>
      {children}
    </AchContext.Provider>
  );
};