import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const getProsFromSearch = async (input) => {
    const { data } = await axios.get(
      `http://ecommercedb.runasp.net/api/Products/search?name=${input}`,
    );
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
