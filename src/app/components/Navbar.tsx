import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'
// import NavIcons from './NavIcons'
import dynamic from "next/dynamic";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

export default function Navbar() {
  return (
    <div className=' relative h-20 px-4 md:px-8 lg:px-16  2xl:px-32'>
        {/* MOBILE */}
       <div className=' md:hidden h-full flex items-center justify-between'>
         
         <Link href='/'>
         <div className=' text-2xl tracking-wide'>TOLA</div></Link>
        <Menu/>
       </div>
       {/* BIGGER SCREENS */}
       <div className=' hidden md:flex items-center justify-between gap-8 h-full'>
        {/* LEFT */}
        <div className=' w-1/3 xl:w-1/2  flex items-center gap-12 '>
        <Link href='/' className='flex items-center gap-3'> 
        <Image  src='/logo.png' alt='logo' width={24} height={24}/>
        <div className='text-2xl tracking-wide'>TOLA</div>
        
        </Link>
        <div className='hidden xl:flex gap-4'>
        <Link href='/' className='hover:opacity-70'>HomePage</Link>
            <Link href='/' className='hover:opacity-70'>Shop</Link>
            <Link href='/' className='hover:opacity-70'>Deals</Link>
            <Link href='/' className='hover:opacity-70'>About</Link>
            <Link href='/' className='hover:opacity-70'>Contact</Link>
            <Link href='/' className='hover:opacity-70'>Logout</Link>
            <Link href='/' className='hover:opacity-70'>Cart(1)</Link>
            </div>
            </div>

        {/* RIGHT */}
        <div className=' w-2/3 xl:w-1/2  flex items-center justify-between gap-8 '>
        <SearchBar/>
        <NavIcons/>
        
         </div>
       </div>
       
    </div>
  )
}
