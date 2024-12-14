import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GoChevronRight } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";
import { BsChevronLeft } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";

const ProductDetails = () => {
  return (
    <>
     <div className="w-full grid grid-cols-1  bg-light_Gray overflow-hidden max-w-screen-2xl  px-20 mx-auto mt-0 ">
      {/* links */}
      <div>
      <ul className="justify-center sm:justify-start flex gap-1 py-6">
            <li>
              <Link href="/" className="font-bold sm:items-start">Home</Link>
            </li>
            <li>
              <GoChevronRight className="pt-[5px] size-5 text-muted_text_col" />
            </li>
            <li>
              <Link href="/Shop/ShopDetail" className="text-muted_text_col font-bold sm:items-end active:text-text2">Shop</Link>
            </li>
          </ul>
      </div>

      {/* product detail */}
      <div className='grid md:grid-cols-2'>

        {/* product img */}
        <div className='flex'>

         <div className='relative'>
          <div className='absolute'><SlArrowRight /></div>
          <div><BsChevronLeft className='absolute' /></div>
          <Image src={'/productDetail/sofa-product-1.jpg'} alt='Product Sofa' width={506}  height={450} className='w-full object-cover'/>
         </div>

         <div className='flex gap-2'>
         <Image src={'/productDetail/sofa-product-1.jpg'} alt='Product Sofa' width={100}  height={75} className=' object-cover'/>
         <Image src={'/productDetail/chair1.jpg'} alt='Product Sofa' width={100}  height={75} className=' object-cover'/>
         </div>
        </div>

        {/* product info */}
        <div className='flex flex-col'>
        <h4 className="font-montserrat text-lg font-normal leading-[30px] tracking-[0.2px] text-text2 text-left">Floating Phone</h4>
         <div className='flex gap-1 text-yellow-300'><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /><p className='text-text text-sm font-bold'>10 Reviews</p></div>
         <h3 className="font-montserrat text-xl font-bold leading-[32px] tracking-[0.1px] text-text2">$1,139.33</h3>
         <div className='flex text-sm font-bold text-text'><span>Availability  :</span> <span className='text-prim_blue'>In Stock </span></div>
         <p className="font-montserrat text-sm font-normal leading-[20px] tracking-[0.2px] text-text">Met minim Mollie non desert Alamo est sit cliquey dolor 
             do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <hr />
          <div className="flex gap-1 ">
              <span className="bg-prim_blue w-[30px] h-[30px] rounded-full"></span>
              <span className="bg-prim_green w-[30px] h-[30px] rounded-full"></span>
              <span className="bg-orange w-[30px] h-[30px] rounded-full"></span>
              <span className="bg-text2 w-[30px] h-[30px] rounded-full"></span>
            </div>
            <div>
           <button className='bg-prim_blue py-5 px-6'><Link href={'/'}>Select Options</Link></button>
           <HiOutlineHeart /><MdOutlineShoppingCart /><BsEyeFill />
           </div>
        </div>
       
      </div>


     </div>
    </>
  )
};
export default ProductDetails;
