import Card from "@/components/FoodCard/Card";
import React from "react";

const data = async () => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`,
    {
      next: { revalidate: 1000 },
    }
  );

  const data = await res.json();
  return data.foods || [];
};
const FoodPages = async () => {
  const foods = await data();
  console.log(foods);

  return (
    <div className=" max-w-11/12 mx-auto flex">
      <div className=" flex-1">
        <h1 className=" text-3xl font-semibold my-10">
          Total Resturent Foods Collections {foods.length}{" "}
        </h1>

        <div className=" grid grid-cols-4 gap-5">
          {foods.map((food) => (
            <Card key={food.id} food={food}></Card>
          ))}
        </div>
      </div>
      <div className=" w-[200px] border mt-27">This is Side Bar Now</div>
    </div>
  );
};

export default FoodPages;
