import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../slice/productSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const openProduct = (item) => {
    dispatch(addProduct(item));
    navigate("/product-details");
  };

  return (
    <div className="bg-gray-200 min-h-screen ">
      <div className="grid grid-cols-4 gap-8 w-10/12 mx-auto py-5 ">
        {products.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow">
            <img
              src={item.image}
              className="w-full h-[150px] object-cover"
              alt=""
            />
            <h1 className="text-lg font-semibold mt-3">{item.title}</h1>
            <p className="text-base text-gray-700 mt-1">
              {item.description.slice(0, 60)}...
            </p>
            <h1>₹{item.price}</h1>

            <button
              onClick={() => openProduct(item)}
              className="bg-green-500 text-white p-1 rounded-lg w-full active:scale-75 duration-300  mt-4"
            >
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
