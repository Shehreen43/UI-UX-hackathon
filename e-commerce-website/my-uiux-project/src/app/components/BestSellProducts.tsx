import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Graphic Design Essentials",
    description: "English Department",
    price: 16.48,
    new_price: 16.50,
    url: "/BestSell1.png",
  },
  {
    id: 2,
    title: "Creative Tools Bundle",
    description: "Design Pro",
    price: 24.99,
    new_price: 24.99,
    url: "/BestSell2.png",
  },
  {
    id: 3,
    title: "Marketing Masterclass",
    description: "For Beginners",
    price: 18.75,
    new_price: 18.75,
    url: "/BestSell3.png",
  },
  {
    id: 4,
    title: "Graphic Design Essentials",
    description: "English Department",
    price: 16.48,
    new_price: 16.50,
    url: "/BestSell4.png",
  },
  {
    id: 5,
    title: "Creative Tools Bundle",
    description: "Design Pro",
    price: 24.99,
    new_price: 24.99,
    url: "/BestSell5.png",
  },
  {
    id: 6,
    title: "Marketing Masterclass",
    description: "For Beginners",
    price: 18.75,
    new_price: 18.75,
    url: "/BestSell6.png",
  },
  {
    id: 7,
    title: "Creative Tools Bundle",
    description: "Design Pro",
    price: 24.99,
    new_price: 24.99,
    url: "/BestSell7.png",
  },
  {
    id: 8,
    title: "Marketing Masterclass",
    description: "For Beginners",
    price: 18.75,
    new_price: 18.75,
    url: "/BestSell8.png",
  },
];

export const BestSeller_Pd = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 pt-10">
      <div>
        <h4 className="font-montserrat text-text text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center">
          Featured Products
        </h4>
        <h3 className="font-montserrat text-[24px] text-text2 font-bold leading-[32px] tracking-[0.1px] text-center">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-montserrat text-[14px] font-normal text-text leading-[20px] tracking-[0.2px] text-center">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="min-w-[239px] max-h-[427px] w-full">
              <Image
                src={product.url}
                alt={product.title}
                width={239}
                height={427}
                className="w-full h-full object-cover"
              />
            </div>

            <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-text2 mt-2">
              {product.title}
            </h5>

            <p className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-text text-center">
              {product.description}
            </p>

            <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-text2 mt-2">
              <span className="text-[#BDBDBD]">${product.price}</span>{" "}
              <span className="text-text2">${product.new_price}</span>
            </h5>

            <div className="flex gap-1 mt-2 justify-center">
              <span className="bg-prim_blue w-[16px] h-[16px] rounded-full"></span>
              <span className="bg-prim_green w-[16px] h-[16px] rounded-full"></span>
              <span className="bg-orange w-[16px] h-[16px] rounded-full"></span>
              <span className="bg-text2 w-[16px] h-[16px] rounded-full"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller_Pd;
