import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { GoChevronRight } from "react-icons/go";
import Shop_Card from '../../components/ShopCard';
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { GoChevronDown } from "react-icons/go";
import Shop_Product from '../../components/Shop_Product';


const ShopProduct = async () => {


  const brandLogos = [
    {
      id: 1,
      imgSrc: '/shop/shop-brands-1.png',
      alt: 'hooli Logo',
      width: 103,
      height: 34,
      link: '/',
    },
    {
      id: 2,
      imgSrc: '/shop/shop-brands-2.png',
      alt: 'lyft Logo',
      width: 83,
      height: 59,
      link: '/',
    },
    {
      id: 3,
      imgSrc: '/shop/shop-brands-3.png',
      alt: ' Logo',
      width: 102,
      height: 75,
      link: '/',
    },
    {
      id: 4,
      imgSrc: '/shop/shop-brands-4.png',
      alt: 'Strip Logo',
      width: 103,
      height: 42,
      link: '/',
    },
    {
      id: 5,
      imgSrc: '/shop/shop-brands-5.png',
      alt: 'AWS Logo',
      width: 104,
      height: 62,
      link: '/',
    },
    {
      id: 6,
      imgSrc: '/shop/shop-brands-6.png',
      alt: 'Logo',
      width: 76,
      height: 72,
      link: '/',
    },
  ];
   // Shop card items data
   const ShopItem = [
    { id: '1', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC1.png' },
    { id: '2', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC2.png' },
    { id: '3', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC3.png' },
    { id: '4', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC4.png' },
    { id: '5', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC5.png' },
  ];

  
  return (
    <main className="w-full ">
      <div className="flex flex-col bg-light_Gray w-full overflow-hidden max-w-screen-2xl px-20 mx-auto mt-0 ">
        {/* Links */}
        <div className="py-6 flex-col flex items-center justify-center sm:flex-row sm:justify-between">
          <h3 className="font-montserrat text-2xl py-7 sm:py-0 font-bold text-text2 leading-8 tracking-[0.1px]">
            Shop
          </h3>
          <ul className="sm:justify-end flex gap-1">
            <li>
              <Link href="/" className="font-bold sm:items-start">Home</Link>
            </li>
            <li>
              <GoChevronRight className="pt-[5px] size-5 text-muted_text_col" />
            </li>
            <li>
               <Link href="/Shop/ShopDetail" className="text-muted_text_col font-bold sm:items-end">Shop</Link>
            </li>
          </ul>
        </div>

        {/* Shop Gallery Product */}
        <div className="w-full grid grid-cols-1 gap-y-5 md:grid-cols-3 lg:grid-cols-5 md:gap-x-4 pt-5 pb-10">
          {ShopItem.map((item) => (
            <Shop_Card
              key={item.id}
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
              
            />
          ))}
        </div>
      </div>
      {/* button links */}
      <div className='bg-white w-full flex flex-col justify-center items-center md:flex-row md:justify-between overflow-hidden max-w-screen-2xl  px-20 mx-auto my-5 py-6 '>
       
        <h6 className="font-montserrat text-sm font-bold leading-6 p-1 tracking-[0.2px] text-text">Showing all 12 results</h6>
       
        <div className='flex gap-x-3 my-5'>
          <button><Link href={'/'} className='text-sm font-bold text-text' >Views:</Link></button>
          <button><Link href={'/'}><CgMenuGridR className='border-2 size-10 p-1  rounded-[5px]' /></Link></button>
          <button><Link href={'/'}><TfiMenuAlt className='border-2 size-10 p-1  rounded-[5px]' /></Link></button>
          </div>
        <div className='flex gap-4'>
        <button className='bg-[#ECECEC] text-text px-3 gap-2 border rounded-[5px]'><Link href={'/'} className='text-sm  gap-1 flex ' >Popularity<GoChevronDown /></Link></button>
        <button className='bg-prim_blue text-white py-[10px] px-[20px]  rounded-[5px]'><Link href={'/'} className='text-sm font-bold' >Filter</Link></button>
        </div>
      </div>

      {/* brands  */}
      <div className="hidden md:flex md:flex-wrap md:justify-between w-full bg-light_Gray py-[50px] overflow-hidden max-w-screen-2xl gap-x-1  px-20 mx-auto">
       
      {brandLogos.map((logo) => (
        <Link
          href={logo.link}
          key={logo.id}
          className="gap-1 hover:scale-110 transition duration-300"
        >
          <div style={{ width: logo.width, height: logo.height }} className='pt-1'>
            <Image
              src={logo.imgSrc}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className='w-full object-cover h-auto'
            />
          </div>
        </Link>
      ))};
    </div>
    

    {/* Shop Product cards */}
 <div>
  <Shop_Product />
 </div>
   
    {/* Navigations */}
    <div className='w-full overflow-hidden max-w-screen-2xl  px-20 mx-auto flex justify-center items-center my-10'>
      <ul className='flex font-montserrat text-sm font-bold leading-6 tracking-[0.2px] items-center text-center w-[313px] h-[74px] gap-0'>
        <li><Link href={'/'} className='text-muted_text_col p-[25px] text-center  border-r-2  border-2 border-muted_text_col rounded-tl-[6.73px] rounded-bl-[6.73px]'>First</Link></li>
        <li><Link href={'/'} className=' px-4 py-[25px] bg-white border-2 text-prim_blue border-muted_text_col' >1</Link></li>
        <li><Link href={'/'} className=' px-4 py-[25px] bg-prim_blue border-2 text-white border-muted_text_col' >2</Link></li>
        <li><Link href={'/'} className=' px-4 py-[25px] text-prim_blue bg-white border-2 border-muted_text_col' >3</Link></li>
        <li><Link href={'/'} className='border-r-2 p-[25px] text-prim_blue border-2 border-muted_text_col rounded-tr-[6.73px] rounded-br-[6.73px]'>Next</Link></li>
      </ul>
    </div>

   {/* brands */}
<div className="w-full flex flex-col md:hidden items-center justify-between bg-light_Gray py-[50px] px-20 mx-auto gap-y-10 overflow-hidden">
  {brandLogos.map((logo) => (
    <Link
      href={logo.link}
      key={logo.id}
      className="hover:scale-110 transition duration-300"
    >
      <div
        style={{ width: logo.width, height: logo.height }}
        className="flex items-center"
      >
        <Image
          src={logo.imgSrc}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="w-full object-cover h-auto"
        />
      </div>
    </Link>
  ))}
</div>


    </main>
  );
};

export default ShopProduct;