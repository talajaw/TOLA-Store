// "use client";

import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
// import { useWixClient } from "./hooks/useWixClient";
import { wixClientServer } from "./lib/wixClientServer";
import { Suspense } from "react";
import Skeleton from "./components/Skeleton";

const HomePage =async () => {
  // TEST (FETCHING ON THE CLIENT COMPONENT)

  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res);
  //   };

  //   getProducts();
  // }, [wixClient]);



    // TEST (FETCHING ON THE SERVER COMPONENT)

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);


  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 2xl:px-32">
        <h2 className="text-xl mb-3 text-gray-800 font-semibold">
          Featured Products{" "}
        </h2>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
        {/* <ProductList /> */}
      </div>

      <div className="mt-24  px-4 md:px-8 lg:px-16 2xl:px-32 ">
        <h2 className="text-xl mb-3   text-gray-800 font-semibold">
          Categories{" "}
        </h2>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 2xl:px-32">
        <h2 className="text-xl mb-3 text-gray-800 font-semibold">
          New Products{" "}
        </h2>
        {/* <ProductList /> */}
      </div>
    </div>
  );
};

export default HomePage;
