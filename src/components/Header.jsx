import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" bg-stone-600 ">
      <div className=" max-w-11/12 mx-auto flex items-center justify-between">
        <div>
          <img src={"/image.png"} width={100}></img>
        </div>
        <div>
          <ul className=" flex  gap-10">
            <Link
              href={"/"}
              className="bg-sky-400 px-3 py-1.5 rounded-lg text-black"
            >
              Home
            </Link>
            <Link
              href={"/food"}
              className="bg-sky-400 px-3 py-1.5 rounded-lg text-black"
            >
              Foods
            </Link>
            <Link
              href={"/review"}
              className="bg-sky-400 px-3 py-1.5 rounded-lg text-black"
            >
              Review
            </Link>
            <Link
              href={"/food"}
              className="bg-sky-400 px-3 py-1.5 rounded-lg text-black"
            >
              Foods
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
