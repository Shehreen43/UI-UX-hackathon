import Link from 'next/link'
import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { PiDotsThreeOutlineVerticalDuotone } from 'react-icons/pi';

const ShopProduct = () => {
  return (
    <main className='w-full bg-light_Gray overflow-hidden max-w-screen-2xl mx-auto mt-0 px-14 '>
       <div className='flex flex-col'>
        {/* links show */}
        <div className='sm:justify-between py-6 flex-col flex items-center justify-center sm:flex '>
        <h3 className="font-montserrat text-2xl py-5 font-bold text-text2 leading-8 tracking-[0.1px] sm:justify-start">Shop</h3>

            <ul className='sm:justify-end flex gap-1'>
                <li><Link href={'/'} className='font-bold '>Home</Link></li>
                <li><GoChevronRight  className='pt-[5px] size-5 text-muted_text_col'/></li>
                <li><Link href={'/Shop'} className='text-muted_text_col font-bold '>Shop</Link></li>
            </ul>
        </div>

        {/* Shop Gallery Product */}
        {/* <div></div> */} 

        {/* brands */}
        </div>
    </main>
  )
};

export default ShopProduct;
