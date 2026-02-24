import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const searchURL = "/api/products/search";

  const getProsFromSearch = async (input) => {
    const { data } = await axios.get(searchURL, {
      params: { name: input },
    });
    setResult(data);
  };

  return (
    <SearchContext.Provider
      value={{ input, setInput, getProsFromSearch, result }}
    >
      {children}
    </SearchContext.Provider>
  );
};
