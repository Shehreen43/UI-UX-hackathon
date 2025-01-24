
import React from "react";
import Image from "next/image";


const products = [
    {
        id: 1,
        title: "Graphic Design Essentials",
        description: "English Department",
        price: 16.48,
        new_price: 16.5,
        url: "/ed1.png",
      },
      {
        id: 2,
        title: "Creative Tools Bundle",
        description: "Design Pro",
        price: 24.99,
        new_price: 24.99,
        url: "/edp2.png",
      },
      {
        id: 3,
        title: "Marketing Masterclass",
        description: "For Beginners",
        price: 18.75,
        new_price: 18.75,
        url: "/BestSell7.png",
      },
      {
        id: 4,
        title: "Graphic Design Essentials",
        description: "English Department",
        price: 16.48,
        new_price: 16.5,
        url: "/BestSell8.png",
      },
    {
      id: 5,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/BestSell1.png",
    },
    {
      id: 6,
      title: "Creative Tools Bundle",
      description: "Design Pro",
      price: 24.99,
      new_price: 24.99,
      url: "/BestSell2.png",
    },
    {
      id: 7,
      title: "Marketing Masterclass",
      description: "For Beginners",
      price: 18.75,
      new_price: 18.75,
      url: "/BestSell3.png",
    },
    {
      id: 8,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/BestSell4.png",
    },
    {
      id: 9,
      title: "Creative Tools Bundle",
      description: "Design Pro",
      price: 24.99,
      new_price: 24.99,
      url: "/BestSell5.png",
    },
    {
      id: 10,
      title: "Marketing Masterclass",
      description: "For Beginners",
      price: 18.75,
      new_price: 18.75,
      url: "/BestSell6.png",
    },
    {
      id: 11,
      title: "Creative Tools Bundle",
      description: "Design Pro",
      price: 24.99,
      new_price: 24.99,
      url: "/BestSell7.png",
    },
    {
      id: 12,
      title: "Marketing Masterclass",
      description: "For Beginners",
      price: 18.75,
      new_price: 18.75,
      url: "/BestSell8.png",
    },
   
];

const productMobile = [
    {
      id: 1,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/ed1.png",
    },
    {
      id: 2,
      title: "Creative Tools Bundle",
      description: "Design Pro",
      price: 24.99,
      new_price: 24.99,
      url: "/edp2.png",
    },
    {
      id: 3,
      title: "Marketing Masterclass",
      description: "For Beginners",
      price: 18.75,
      new_price: 18.75,
      url: "/BestSell7.png",
    },
    {
      id: 4,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/BestSell8.png",
    }
];


export const Shop_Product = () => {
  return (
    <div className="bg-white w-full overflow-hidden max-w-screen-2xl mx-auto my-10  px-20">
         {/* Card Grid MD screen ... */}
              <div className="w-full grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
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
              </div>

  )
};

export default Shop_Product;
