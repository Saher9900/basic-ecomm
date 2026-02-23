import { useEffect, useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Link } from "react-router-dom";

export default function TestSearch() {
  const { input, setInput, getProsFromSearch, result } =
    useContext(SearchContext);

  useEffect(() => {
    getProsFromSearch(input);
    console.log(result);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="border"
      />
      <div>
        {
          result.map((pro) => (
            <Link to={`/products/proDetails/${pro.id}`} key={pro.id}>
              {pro.name}
            </Link>
          ))
        }
      </div>
    </div>
  );
}
