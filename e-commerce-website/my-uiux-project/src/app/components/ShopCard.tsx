import Image from 'next/image';
import React from 'react';

interface ShopCardProps {
    title: string;
    description: string;
    imgUrl: string
}

const Shop_Card: React.FC<ShopCardProps> = ({title, description, imgUrl}) => {
  return (
    <div>
       <div className='w-full relative max-w-[332px] max-h-[300px] flex flex-col justify-center items-center text-white'>
         
         {/* title */}
        <h5 className="absolute font-montserrat text-lg font-bold leading-6 tracking-[0.1px] text-center">{title}</h5>

        {/* description */}
        <p className="absolute top-[55%] font-montserrat text-sm font-normal leading-5 tracking-[0.2px]">{description}</p>

        {/* image Url */}
        <Image src={imgUrl} alt='Shop Items' width={206} height={223} className='w-full object-cover'/>
       </div>


    </div>
  )
}
export default Shop_Card;