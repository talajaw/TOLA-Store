import Link from "next/link";
import React from "react";
import Image from "next/image";
import { wixClientServer } from "../lib/wixClientServer";
import { products } from "@wix/stores";

const PRODUCT_PER_PAGE = 8;


const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

    console.log(res.items[0].priceData)

  return (
    <div className="ProductList flex justify-between flex-wrap gap-x-8 gap-y-16">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          key={product._id}
          className=" flex flex-col w-full gap-4 md:w-[45%] lg:w-[22%] "
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className=" absolute z-10 object-cover rounded-md hover:opacity-0 transition-opacity easy ease-in duration-500"
            />
               {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between ">
            <span className=" font-medium">{product.name}</span>
            <span className=" font-semibold">${product.priceData?.price}</span>
          </div>
          <div className="text-sm text-gray-500">My description</div>
          <button className="rounded-2xl ring-1 ring-[#ec4899] text-[#ec4899] w-max px-4 py-2 text-sm hover:bg-[#ec4899] hover:text-white ">
            Add to Cart
          </button>
        </Link>
      ))}

      {/* 2 product
      <Link
        href="/test"
        className=" flex flex-col w-full gap-4 md:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28262526/pexels-photo-28262526/free-photo-of-a-woman-in-jeans-and-white-shirt-posing-on-a-street-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className=" absolute z-10 object-cover rounded-md hover:opacity-0 transition-opacity easy ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/29084208/pexels-photo-29084208/free-photo-of-serene-beachside-woman-holding-wine-glass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between ">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-[#ec4899] text-[#ec4899] w-max px-4 py-2 text-sm hover:bg-[#ec4899] hover:text-white ">
          Add to Cart
        </button>
      </Link>

      {/* 3product */}
      {/* <Link
        href="/test"
        className=" flex flex-col w-full gap-4 md:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28262526/pexels-photo-28262526/free-photo-of-a-woman-in-jeans-and-white-shirt-posing-on-a-street-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className=" absolute z-10 object-cover rounded-md hover:opacity-0 transition-opacity easy ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/29084208/pexels-photo-29084208/free-photo-of-serene-beachside-woman-holding-wine-glass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between ">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-[#ec4899] text-[#ec4899] w-max px-4 py-2 text-sm hover:bg-[#ec4899] hover:text-white ">
          Add to Cart
        </button>
      </Link> */}

      {/* 4 product */}
      {/* <Link
        href="/test"
        className=" flex flex-col w-full gap-4 md:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28262526/pexels-photo-28262526/free-photo-of-a-woman-in-jeans-and-white-shirt-posing-on-a-street-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className=" absolute z-10 object-cover rounded-md hover:opacity-0 transition-opacity easy ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/29084208/pexels-photo-29084208/free-photo-of-serene-beachside-woman-holding-wine-glass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between ">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-[#ec4899] text-[#ec4899] w-max px-4 py-2 text-sm hover:bg-[#ec4899] hover:text-white ">
          Add to Cart
        </button>
      </Link>  */}
    </div>
  );
};

export default ProductList;
