import React from "react";
import ProductImages from "../components/ProductImages";
import CustomizeProducts from "../components/CustomizeProducts";
import Add from "../components/Add";
import Reviews from "../components/Reviews";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { wixClientServer } from "../lib/wixClientServer";


export default  async  function Singlepage({ params }: { params: { slug: string } }) {


  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];


  return (
    <div className="[slug] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
      <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">
          {product.description}
        </p>

        <div className="h-[2px] bg-gray-100"></div>

        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">${product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}


          <div className="h-[2px]  bg-gray-100"></div>
        
        
        <CustomizeProducts/>
        <div className="h-[2px] bg-gray-100"></div>
          <Add/>
          <div className="h-[2px] bg-gray-100"></div>
          <div className=" space-y-8">
            <div className="text-sm">
              <h4 className="font-medium mb-4">Title</h4>
              <p className="text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente laborum eveniet facilis sint, unde eius quam aperiam quae numquam odio. Eligendi optio ipsa quia dignissimos magnam dolorum, omnis ullam.</p>
            </div>

            <div className="text-sm">
              <h4 className="font-medium mb-4">Title</h4>
              <p className="text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente laborum eveniet facilis sint, unde eius quam aperiam quae numquam odio. Eligendi optio ipsa quia dignissimos magnam dolorum, omnis ullam.</p>
            </div>


            <div className="text-sm">
              <h4 className="font-medium mb-4">Title</h4>
              <p className="text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente laborum eveniet facilis sint, unde eius quam aperiam quae numquam odio. Eligendi optio ipsa quia dignissimos magnam dolorum, omnis ullam.</p>
            </div>


            <div className="text-sm">
              <h4 className="font-medium mb-4">Title</h4>
              <p className="text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente laborum eveniet facilis sint, unde eius quam aperiam quae numquam odio. Eligendi optio ipsa quia dignissimos magnam dolorum, omnis ullam.</p>
            </div>
          </div>
       
      </div>
    </div>
  );
}
