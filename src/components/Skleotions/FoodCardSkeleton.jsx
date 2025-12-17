import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-xl overflow-hidden max-w-sm border border-stone-100 animate-pulse">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-stone-200/30 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-stone-200/30 rounded-tr-full"></div>

      {/* Image Skeleton */}
      <div className="relative h-72 bg-gradient-to-br from-stone-200 to-stone-300">
        {/* Badge Skeletons */}
        <div className="absolute top-5 left-5 bg-stone-300 rounded-full w-24 h-9"></div>
        <div className="absolute top-5 right-5 bg-stone-300 rounded-2xl w-20 h-12"></div>
      </div>

      {/* Content Skeleton */}
      <div className="relative p-6 space-y-4">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-7 bg-stone-300 rounded-lg w-full"></div>
          <div className="h-7 bg-stone-300 rounded-lg w-3/4"></div>
        </div>

        {/* ID Badge Skeleton */}
        <div className="flex items-center gap-2">
          <div className="bg-stone-200 rounded-lg w-16 h-6"></div>
          <div className="flex-1 h-px bg-stone-200"></div>
        </div>

        {/* Rating Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-5 h-5 bg-stone-300 rounded"></div>
            ))}
          </div>
          <div className="bg-stone-200 rounded-full w-20 h-7"></div>
        </div>

        {/* Features Skeleton */}
        <div className="flex gap-2">
          <div className="bg-stone-200 rounded-full w-16 h-6"></div>
          <div className="bg-stone-200 rounded-full w-14 h-6"></div>
          <div className="bg-stone-200 rounded-full w-14 h-6"></div>
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-200"></div>

        {/* Buttons Skeleton */}
        <div className="flex gap-3">
          <div className="flex-1 bg-stone-300 rounded-2xl h-14"></div>
          <div className="bg-stone-300 rounded-2xl w-14 h-14"></div>
        </div>

        {/* Links Skeleton */}
        <div className="flex gap-3 pt-2">
          <div className="flex-1 bg-stone-200 rounded h-8"></div>
          <div className="flex-1 bg-stone-200 rounded h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
