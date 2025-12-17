import Card from "@/components/FoodCard/Card";
import React from "react";
import CardItems from "./CardItems";
import SearchText from "@/components/SearchText";

const data = async (search) => {
  // ⏳ fetch এর আগেই delay

  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    {
      next: { revalidate: 3000 },
    }
  );

  const data = await res.json();
  return data.foods || [];
};

const FoodPages = async ({searchParams}) => {;
  const  {search = " "} = await searchParams;
  console.log(search);
  
  
  const foods = await data(search);
  
  console.log(foods);

  return (
    <div className=" max-w-11/12 mx-auto flex">
      <div className=" flex-1">
        <h1 className=" text-3xl font-semibold my-10">
          Total Resturent Foods Collections {foods.length}{" "}
        </h1>
        <div>
          <SearchText></SearchText>
        </div>

        <div className=" grid grid-cols-4 gap-5">
          {foods.map((food) => (
            <Card key={food.id} food={food}></Card>
          ))}
        </div>
      </div>
      <div className=" w-[200px] border mt-27">This is Side Bar Now
        
        <CardItems></CardItems>
      
      </div>
    </div>
  );
};

export default FoodPages;
