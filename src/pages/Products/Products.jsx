import "./Products.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CatsContext } from "../../contexts/CatsContext.jsx";
import { ProsContext } from "../../contexts/ProsContext.jsx";

function Products() {
  // states

  const [chosenCat, setChosenCat] = useState("phones");

  // contexts

  const { getCats, cats } = useContext(CatsContext);
  const {getPros, pros} = useContext(ProsContext)

  useEffect(() => {
    getCats();
    getPros();
  }, []);
  return (
    <div>
      {/* categories */}
      <div className="flex flex-row gap-4 py-4 justify-center">
        {cats.map((cat) => (
          <div
            className={`px-4 py-2 rounded-lg border cursor-pointer shadow hover:bg-blue-100 transition ${chosenCat === cat.name ? "bg-blue-500 text-white" : "bg-white text-gray-900"}`}
            key={cat.id}
            onClick={() => setChosenCat(cat.name)}
          >
            <h1 className="text-lg font-semibold">{cat.name}</h1>
          </div>
        ))}
      </div>
      {/* products based on category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {pros.filter((pro) => {
          return pro.categoryName == chosenCat
        }).map((pro) => (
          <div
            key={pro.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4 border border-gray-100 hover:border-blue-400 group"
          >
            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 mb-4">
              <img
                src={pro.image}
                alt={pro.name}
                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{pro.name}</h2>
            {/* Add more product info here if available, e.g. price, description, etc. */}
            <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200 font-semibold">View Details</button>
          </div>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
}

export default Products;
