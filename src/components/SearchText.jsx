"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
const SearchText = () => {
    const router = useRouter();
    const params = useSearchParams();
  const handelSearch = (e) => {
    e.preventDefault();
    const  froms = e.target.search.value;
    const newParams = new URLSearchParams (params.toString());
    newParams.set("search", froms);
    router.push(`?${newParams.toString()}`)
  };
  return (
    <form onSubmit={handelSearch} className=" my-10">
      <input
        type="text"
        name="search"
        placeholder="Search Food"
        className="border-white rounded-xl border px-5 py-1.5 "
      ></input>
      <button className=" bg-amber-500 px-4 py-1.5 rounded-xl">Srarch</button>
    </form>
  );
};

export default SearchText;
