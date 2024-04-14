import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);

  const api = `http://localhost:3000/hpapi/`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProductos(data)
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-black pb-8 flex justify-center">
      <div className="w-[90%]">
        <h1 className="text-3xl text-white font-bold pt-8 mb-8 text-center">Personajes</h1>
        <div className="grid grid-cols-3 gap-2">
          {productos.map((producto, index) => (
            <div key={index} className="bg-gray-200 border border-white rounded-xl flex flex-col items-center p-4">
              <img src={producto.image} alt={producto.name} className="w-[80%] h-[85%] mb-2 rounded-t-xl" />
              <h2 className="text-center text-lg font-semibold">{producto.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;