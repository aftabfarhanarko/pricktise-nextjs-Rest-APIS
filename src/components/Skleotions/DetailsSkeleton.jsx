import React, { Suspense } from 'react';
import Image from 'next/image';

// Skeleton Component
const DetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <div className="space-y-4">
          <div className="w-full h-96 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-12 bg-gray-300 rounded animate-pulse w-48"></div>
        </div>

        {/* Details Skeleton */}
        <div className="space-y-6">
          <div className="h-10 bg-gray-300 rounded animate-pulse w-3/4"></div>
          <div className="flex gap-4">
            <div className="h-8 bg-gray-300 rounded animate-pulse w-24"></div>
            <div className="h-8 bg-gray-300 rounded animate-pulse w-32"></div>
          </div>
          <div className="h-12 bg-gray-300 rounded animate-pulse w-32"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-4/6"></div>
          </div>
          <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;