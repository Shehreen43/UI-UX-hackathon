import Link from 'next/link';
import React from 'react';
import { GoChevronRight } from "react-icons/go";
import Shop_Card from '../components/ShopCard';

const ShopProduct = () => {
  // Shop card items data
  const ShopItem = [
    { id: '1', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC1.png' },
    { id: '2', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC2.png' },
    { id: '3', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC3.png' },
    { id: '4', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC4.png' },
    { id: '5', title: 'CLOTHS', description: '5 Items', imgUrl: '/shop/shopC5.png' },
  ];

  return (
    <main className="w-full bg-light_Gray overflow-hidden max-w-screen-2xl mx-auto mt-0 px-14">
      <div className="flex flex-col">
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
              <Link href="/Shop" className="text-muted_text_col font-bold sm:items-end">Shop</Link>
            </li>
          </ul>
        </div>

        {/* Shop Gallery Product */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4">
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

      {/* brands  */}
    </main>
  );
};

export default ShopProduct;
