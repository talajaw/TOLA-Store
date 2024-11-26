import React from "react";
import Image from "next/image";
import Link from "next/link";
import { wixClientServer } from "../lib/wixClientServer";

export default async function CategoryList() {
    const wixClient = await wixClientServer();

    const cats = await wixClient.collections.queryCollections().find();
  return (
    <div className="CategoryList overflow-x-scroll scrollbar-hide px-4 ">
      <div className="flex gap-4 md:gap-8">
      {cats.items.map((item) => (
        <Link   key={item._id}   href={`/list?cat=${item.slug}`} className=" flex-shrink-0 w-full md:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
               src={item.media?.mainMedia?.image?.url || "/cat.png"}
              alt=" "
              fill
              sizes="20vw"
              className=" object-cover rounded-sm"
            />
          </div>
          <h1 className="mt-4 mb-2 font-light text-clip tracking-wide"> {item.name}</h1>
        </Link>
           ))}

        {/* 2 pro */}
        {/* <Link href="/list?cat=test " className=" flex-shrink-0 w-full md:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/29078745/pexels-photo-29078745/free-photo-of-elegant-woman-with-pearl-necklace-and-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=" "
              fill
              sizes="20vw"
              className=" object-cover rounded-sm"
            />
          </div>
          <h1 className="mt-4 mb-2 font-light text-clip tracking-wide">Category Name</h1>
        </Link> */}

        {/* 3pro */}
        {/* <Link href="/list?cat=test " className=" flex-shrink-0 w-full md:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/29078745/pexels-photo-29078745/free-photo-of-elegant-woman-with-pearl-necklace-and-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=" "
              fill
              sizes="20vw"
              className=" object-cover rounded-sm"
            />
          </div>
          <h1 className="mt-4 mb-2 font-light text-clip tracking-wide">Category Name</h1>
        </Link> */}
        {/* 4pro */}
        {/* <Link href="/list?cat=test " className=" flex-shrink-0 w-full md:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/29078745/pexels-photo-29078745/free-photo-of-elegant-woman-with-pearl-necklace-and-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=" "
              fill
              sizes="20vw"
              className=" object-cover rounded-sm"
            />
          </div>
          <h1 className="mt-4 mb-2 font-light text-clip tracking-wide">Category Name</h1>
        </Link> */}
        {/* 5pro */}
        {/* <Link href="/list?cat=test " className=" flex-shrink-0 w-full md:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/10064224/pexels-photo-10064224.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=" "
              fill
              sizes="20vw"
              className=" object-cover rounded-sm"
            />
          </div>
          <h1 className="mt-4 mb-2 font-light text-clip tracking-wide">Category Name</h1>
        </Link> */}
        {/* 6pro */}
        {/* <Link href="/list?cat=test " className=" flex-shrink-0 w-full md:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/10064224/pexels-photo-10064224.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=" "
              fill
              sizes="20vw"
              className=" object-cover rounded-sm"
            />
          </div>
          <h1 className="mt-4 mb-2 font-light text-clip tracking-wide">Category Name</h1>
        </Link> */}

      </div>
     
    </div>
  );
}
