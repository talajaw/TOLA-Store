"use client";
import React from "react";
import {useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineNotifications } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import {usePathname, useRouter } from "next/navigation";
import CartModal from "./CartModal";
import Link from "next/link"; 
import { useWixClient } from "../hooks/useWixClient";
import { useCartStore } from "../hooks/useCartStore";
import Cookies from "js-cookie";


export default function NavIcons() {
  const router = useRouter();
  const pathName = usePathname();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();


  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const isLoggedIn = false;

   const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };
  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };


  const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);


  return (
    <div className="NavIcons relative flex gap-2 xl:gap-6 items-center ">
      <FaRegCircleUser
        className="w-4 h-5 cursor-pointer hover:text-[#ec4899]"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className=" absolute z-20 top-12 left-0 text-sm rounded-md p-4 shadow-md shadow-gray-400  ">
          <Link href="/" className=" hover:text-[#ec4899]">Profile</Link>
            <div onClick={handleLogout} className="mt-2  cursor-pointer  hover:text-[#ec4899] "> {isLoading ? "Logging out" : "Logout"}</div>
        </div>
      )}
      <MdOutlineNotifications className="w-5 h-5 hover:text-[#ec4899]" />
      <div onClick={() => setIsCartOpen((prev) => !prev)}  className=" relative cursor-pointer">
      <FiShoppingCart
        className="w-4 h-5 hover:text-[#ec4899]"
        
      />
      <div className=" absolute -top-3 left-2 w-4 h-4 bg-[#ec4899] rounded-full text-white text-xs flex  items-center justify-center  "> {counter}</div>
      </div>
     
      {isCartOpen && <CartModal />}
    </div>
  );
}

