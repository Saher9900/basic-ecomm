import './HomePagePros.css'
import { useContext, useEffect } from 'react';
import { ProsContext } from '../../contexts/ProsContext';

function HomePagePros() {

  const {getPros, pros} = useContext(ProsContext);
  
  useEffect(() => {
    getPros();
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {pros.slice(0, 8).map((pro) => (
            <div key={pro.id} className="bg-gray-100 rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-white mb-4">
                <img
                  src={pro?.image}
                  alt={pro?.name}
                  className="object-contain h-full w-auto max-w-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{pro?.name}</h3>
              {pro?.price && (
                <div className="text-blue-600 font-bold text-md mb-2">${pro?.price}</div>
              )}
              <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200 font-semibold">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePagePros;