'use client';
import React from 'react';
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import Link from 'next/link';

export default function Menu() {
    const[isOpen , setIsOpen]=useState(false);
  return (
    <div>
       <div className=' cursor-pointer' onClick={()=> setIsOpen((prev) => !prev)}><MdMenu  className='w-7 h-7'/></div> 
       {isOpen && (
        <div className='  absolute z-10 top-20 left-0 flex flex-col justify-center items-center gap-8  text-xl  bg-black text-white  w-full  h-[calc(100vh-80px)] '>
            <Link href='/' className='hover:opacity-70'>HomePage</Link>
            <Link href='/' className='hover:opacity-70'>Shop</Link>
            <Link href='/' className='hover:opacity-70'>Deals</Link>
            <Link href='/' className='hover:opacity-70'>About</Link>
            <Link href='/' className='hover:opacity-70'>Contact</Link>
            <Link href='/' className='hover:opacity-70'>Logout</Link>
            <Link href='/' className='hover:opacity-70'>Cart(1)</Link>


        </div>
       )}
    </div>
  )
}
