import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Button from "../Button";

const FoodCard = ({ food }) => {


  
  return (
    <div className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {food.category}
        </div>
      
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{food.title}</h2>

        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl font-bold text-orange-600">
            ৳{food.price}
          </div>
          <div className="text-sm text-gray-500">ID: {food.id}</div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
        <Button food={food}></Button>

          <Link href={`/food/${food.id}`}
            className="bg-gray-100 hover:bg-orange-500 text-orange-500 hover:text-white p-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
