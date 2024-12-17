import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const BrandsLogo = () => {
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

  return (
   <>
    {/* brands  */}
      <div className=" md:flex-row  md:justify-between w-full flex flex-col  items-center justify-between bg-light_Gray py-[50px] px-20 mx-auto gap-y-10 overflow-hidden">
       
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

   </>
  )
}

export default BrandsLogo;