"use client";
import React, { createContext, useState } from "react";

export const CardContex = createContext(null);

const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);
  const handelButton = (food) => {
    setCard([...card, food]);
  };
  console.log(card);
  const inmfo = {
    card,
    handelButton,
  };
  return <CardContex.Provider value={inmfo}>{children}</CardContex.Provider>;
};

export default CardProvider;
