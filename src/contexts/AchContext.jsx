import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { proxyImageUrl } from "../utils/imageUrl.js";

const AchContext = createContext();
export default AchContext;

export const AchContextProvider = ({ children }) => {
  const [ach, setAch] = useState([]);
  const [achLoading, setAchLoading] = useState(false);
  const achURL = "/api/achievement";

  const getAch = async () => {
    setAchLoading(true);
    try {
      const { data } = await axios.get(achURL);
      const parsed =
        typeof data === "string"
          ? (() => {
              try {
                return JSON.parse(data);
              } catch {
                return data;
              }
            })()
          : data;

      const items = Array.isArray(parsed)
        ? parsed
        : parsed
        ? [parsed]
        : [];

      const normalized = items.map((item) => {
        const rawImage = item?.image ?? item?.Image;
        const imageUrl =
          rawImage != null && typeof rawImage === "string"
            ? proxyImageUrl(rawImage) ?? rawImage
            : rawImage;

        return {
          ...item,
          image: imageUrl,
        };
      });

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