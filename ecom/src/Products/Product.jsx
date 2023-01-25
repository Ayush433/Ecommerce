import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Product = () => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-3 bg-left-side">
        <div className="flex items-center justify-center h-120">
          <img
            src={product.image}
            alt={product.title}
            className="w-[60%] object-cover rounded-lg shadow-md hover:shadow-lg"
          />
        </div>
      </div>
      <div className="col-span-3 bg-right-side mt-[200px]">
        <h2 className="text-xl font-medium">{product.title}</h2>
        <p className="text-base font-medium">{product.price}</p>
        <p className="text-base">{product.category}</p>
        <p className="text-base">{product.description}</p>
        <div>
          <p> rating </p>
          <div>{/* Add star rating component here */}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
