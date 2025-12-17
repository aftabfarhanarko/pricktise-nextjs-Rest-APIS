
import React from "react";

const ReviewSkeletions = () => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 animate-pulse">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-stone-100/50 to-transparent rounded-bl-full"></div>

      {/* Header Section */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start gap-4">
          {/* Profile Photo Skeleton */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-stone-200 ring-4 ring-stone-100"></div>
            {/* Verified Badge Skeleton */}
            <div className="absolute -bottom-1 -right-1 bg-stone-200 rounded-full p-1 w-6 h-6"></div>
          </div>

          {/* User Info & Rating Skeleton */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="h-5 bg-stone-200 rounded-lg w-32 mb-2"></div>
                <div className="h-4 bg-stone-200 rounded w-48"></div>
              </div>

              {/* Rating Stars Skeleton */}
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-stone-200 rounded"
                    ></div>
                  ))}
                </div>
                <div className="h-5 w-12 bg-stone-200 rounded-full"></div>
              </div>
            </div>

            {/* Date Skeleton */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-4 h-4 bg-stone-200 rounded"></div>
              <div className="h-3 w-24 bg-stone-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Text Skeleton */}
      <div className="px-6 pb-4">
        <div className="relative">
          {/* Quote Icon Skeleton */}
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-stone-100 rounded"></div>

          <div className="pl-6 space-y-2">
            <div className="h-4 bg-stone-200 rounded w-full"></div>
            <div className="h-4 bg-stone-200 rounded w-full"></div>
            <div className="h-4 bg-stone-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 h-px bg-stone-200"></div>

      {/* Footer Actions Skeleton */}
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Like Button Skeleton */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100">
          <div className="w-5 h-5 bg-stone-200 rounded"></div>
          <div className="h-4 w-16 bg-stone-200 rounded"></div>
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-stone-100 rounded-lg"></div>
          <div className="w-9 h-9 bg-stone-100 rounded-lg"></div>
          <div className="w-9 h-9 bg-stone-100 rounded-lg"></div>
        </div>
      </div>

      {/* Bottom Accent Line Skeleton */}
      <div className="h-1 bg-stone-200"></div>
    </div>
  );
};

export default ReviewSkeletions;