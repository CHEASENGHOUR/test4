import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="p-5">Loading...</p>;

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 object-contain mx-auto mb-5"
        />
        <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
        <p className="text-gray-600 mb-3">{product.description}</p>
        <span className="text-xl font-bold text-indigo-600">${product.price}</span>
      </div>
    </div>
  );
}

export default ProductDetail;
