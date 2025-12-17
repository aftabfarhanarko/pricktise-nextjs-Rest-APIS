import DetailsSkeleton from "@/components/Skleotions/DetailsSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div>
      {[
        ...Array(10).map((_, i) => {
          <DetailsSkeleton key={i}></DetailsSkeleton>;
        }),
      ]}
    </div>
  );
};

export default Loading;
