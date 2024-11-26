"use client";
import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import { useWixClient } from "../hooks/useWixClient";
import { useCartStore } from "../hooks/useCartStore";
import React from "react";

export default function CartModal() {
  // const cartItems = true;

  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  const handleCheckout = async () => {
    try {
      const checkout =
        await wixClient.currentCart.createCheckoutFromCurrentCart({
          channelType: currentCart.ChannelType.WEB,
        });

      const { redirectSession } =
        await wixClient.redirects.createRedirectSession({
          ecomCheckout: { checkoutId: checkout.checkoutId },
          callbacks: {
            postFlowUrl: window.location.origin,
            thankYouPageUrl: `${window.location.origin}/success`,
          },
        });

      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="CartModal w-max absolute top-12 right-0 flex flex-col gap-6 z-20 p-4 rounded-md shadow-md shadow-gray-300 bg-gray-50">
      {!cart.lineItems ? (
        <div>Cart is Empty</div>
      ) : (
        <div className="flex flex-col gap-4 ">
          <h2 className=" text-xl text-gray-700 font-semibold">
            Shopping Cart
          </h2>
          {/* list 1 */}
          <div className=" flex gap-4">
            {cart.lineItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="">
                  {/* TOP */}
                  <div className=""></div>
                  {/* TITLE */}
                  <div className="flex items-center  justify-between gap-8">
                    <h3 className="font-semibold"> {item.productName?.original}</h3>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-green-500">
                            {item.quantity} x{" "}
                          </div>
                        )}
                        ${item.price?.amount}
                      </div>
                  </div>
                  {/* DESC */}
                  <div className=" text-sm text-gray-500"> {item.availability?.status}</div>
                  {/* BOTTOM */}
                  <div className="flex items-center  justify-between text-sm">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span 
                     style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                     onClick={() => removeItem(wixClient, item._id!)}
                    className="text-blue-500 cursor-pointer hover:opacity-75 ">
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* list 2  */}
            {/* <div className=" flex gap-4">
            <Image
              src="/product.png"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className=""> */}
            {/* TOP */}
            {/* <div className=""></div> */}
            {/* TITLE */}
            {/* <div className="flex items-center  justify-between gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <p className=" p-1 rounded-sm bg-gray-50">64$</p>
              </div> */}
            {/* DESC */}
            {/* <div className=" text-sm text-gray-500">Available</div> */}
            {/* BOTTOM */}
            {/* <div className="flex items-center  justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500 cursor-pointer hover:opacity-75 ">
                  Remove
                </span>
              </div>
            </div>
          </div> */}

            {/* the end */}
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span className="">Subtotal</span>
                <span className="">${cart.subtotal.amount}</span>
              </div>
              <p className=" text-gray-500 mt-2 mb-4 text-sm">
                {" "}
                Shipping and taxes calculated at checkout.
              </p>
              <div className="flex items-center justify-between text-sm">
                <button className=" px-4 py-3 rounded-md ring-1 ring-gray-300 hover:opacity-70">
                  View Cart
                </button>
                <button
                 disabled={isLoading}
                 onClick={handleCheckout}
                 className="px-4 py-3 rounded-md bg-black text-white hover:opacity-85">
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
