"use client";

'use client';
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosSearch } from "react-icons/io";
export default function SearchBar() {
    const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if(name) {
        router.push(`/list?name=${name}`)

    }
  };
  return (
    <form onSubmit={handleSearch} className=" flex  justify-between items-center gap-8 bg-gray-100 p-2 rounded-md flex-1 ">
      <input
        type="text"
        name="name"
        placeholder="Search..."
        className=" outline-none  bg-transparent flex-1"
       
      />
      <button className=" cursor-pointer">
        <IoIosSearch className="w-5 h-5 hover:text-[#ec4899]" />
      </button>
    </form>
  );
}
