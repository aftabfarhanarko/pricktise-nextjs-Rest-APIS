"use client";
import { CardContex } from "@/context/CardProvider";
import React, { useContext } from "react";
const Button = ({ food }) => {
  const { handelButton } = useContext(CardContex);
  const handelADd = () => {
    handelButton(food);
    console.log("jhsadh", food);
  };
  return (
    <button
      onClick={handelADd}
      className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      Add Now
    </button>
  );
};

export default Button;
