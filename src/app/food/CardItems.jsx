"use client";

import { CardContex } from "@/context/CardProvider";
import React, { useContext } from "react";

const CardItems = () => {
  const { card } = useContext(CardContex);

  return (
    <div className=" p-2">
      <p>{card.length} Item Added</p>
      {card?.map((one) => (
        <div key={one.id} className=" border my-3 flex gap-4 items-center p-2">
          {" "}
          {/* key দিতে ভুলো না! */}
          <img src={one?.foodImg} className=" w-20"></img>
          <h1> {one?.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
