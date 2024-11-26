'use client';
import React, { useState } from 'react'
import Image from "next/image";

// const images =[
//     {
//         id:1,
//         url:'https://images.pexels.com/photos/29435471/pexels-photo-29435471/free-photo-of-vietnamese-woman-in-ao-dai-in-hoi-an.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
//     },
//     { id:2,
//         url:'https://images.pexels.com/photos/27555584/pexels-photo-27555584/free-photo-of-a-woman-sitting-on-a-couch-in-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'},
//     { id:3,
//         url:'https://images.pexels.com/photos/27940276/pexels-photo-27940276/free-photo-of-a-man-sitting-in-the-grass-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'},
//     { id:4,
//         url:'https://images.pexels.com/photos/27045941/pexels-photo-27045941/free-photo-of-young-man-wearing-white-shirt-and-gray-jeans-sitting-in-chair-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'},
// ]

export default function ProductImages({ items }: { items: any }) {
    const [index, setIndex] = useState(0);
  return (
     <div className=" ProductImages">
    <div className="h-[500px] relative ">
      <Image
        src={items[index].image?.url} 
        alt=""
        fill
        sizes="50vw"
        className="object-cover rounded-md"
      />
    </div>
    <div className=' flex justify-between gap-4 mt-8 '>
    {items.map((item:any, i:number) => (
             <div  key={item._id} onClick={()=> setIndex(i)} className=" relative w-1/4 h-32 gap-4 mt-8 cursor-pointer">
             <Image
               src={item.image?.url} 
               alt=""
               fill
               sizes="30vw"
               className="object-cover rounded-md"
             />
           </div>

        ))}
   

    </div>
    </div>
  )
}
