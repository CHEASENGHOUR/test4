import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Contect() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchApi = async () => {
        try{
          const res = await axios.get("https://fakestoreapi.com/products");
          setData(res.data);
        }catch(e){
          console.log(e);
        }finally{
          setLoading(false)
        }
      }
      fetchApi();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        🛒 Products
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
        
        loading ? Array.from({ length: 8}).map((_, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-5 animate-pulse">
            <div className="h-40 bg-gray-300 mb-4 rounded"></div>
            <div className="h-6 bg-gray-300 mb-2 rounded"></div>
            <div className="h-4 bg-gray-300 mb-3 rounded"></div>
            <div className="flex justify-between items-center">
              <div className="h-6 w-16 bg-gray-300 rounded"></div>
              <div className="h-8 w-20 bg-gray-300 rounded"></div>
            </div>
          </div>
        )) : data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-5 hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 object-contain mb-4"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 line-clamp-2 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm mb-3 line-clamp-3">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-600">
                ${item.price}
              </span>
              <button
                className="bg-indigo-500 text-white px-3 py-1 rounded-lg hover:bg-indigo-600 transition"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contect;
