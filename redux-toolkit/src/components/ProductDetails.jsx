import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { productSlice } = useSelector((state) => state);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!productSlice) Navigate("/");
  }, [productSlice, Navigate]);

  if (!productSlice) return null;

  return (
    <div className="bg-gray-200 min-h-screen flex ">
      <div className="bg-white rounded-lg my-12 w-6/12 mx-auto p-8 flex flex-col items-center">
        <img src={productSlice.image} alt="" />
        <h1 className="text-4xl font-bold">{productSlice.title}</h1>
        <p className="text-gray-600 mt-2">{productSlice.description}</p>
        <button className="bg-green-500 text-white font-bold p-2 rounded-xl mt-2 w-full active:scale-78 duration-300">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
