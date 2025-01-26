"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ProductGrid from "./ProductGrid";
import { bestSellerProducts } from "@/sanity/lib/product/getAllBestsellerProducts";


export const BestSeller_Pd = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await bestSellerProducts();
      setProducts(productData);
    };

    fetchProducts();
  }, []);

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
            <div className="min-w-[250px] max-h-[300px] w-full">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller_Pd;


// import Image from "next/image";
// import ProductGrid from "./ProductGrid";
// import { bestSellerProducts } from "@/sanity/lib/product/getAllBestsellerProducts";

// export const BestSeller_Pd = () => {
  
// const products = bestSellerProducts()
//   return (
//     <section className="max-w-screen-2xl mx-auto px-4 pt-10">
//       <div>
//         <h4 className="font-montserrat text-text text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center">
//           Featured Products
//         </h4>
//         <h3 className="font-montserrat text-[24px] text-text2 font-bold leading-[32px] tracking-[0.1px] text-center">
//           BESTSELLER PRODUCTS
//         </h3>
//         <p className="font-montserrat text-[14px] font-normal text-text leading-[20px] tracking-[0.2px] text-center">
//           Problems trying to resolve the conflict between
//         </p>
//       </div>

//       {/* Card Grid */}
//      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//           {products.map((product) => (
//             <div key={product.id} className="flex flex-col">
//               <div className="min-w-[250px] max-h-[300px] w-full">
//                 <Image
//                   src={product.url}
//                   alt={product.title}
//                   width={239}
//                   height={427}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
    
//               <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-text2 mt-2">
//                 {product.title}
//               </h5>
    
//               <p className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-text text-center">
//                 {product.description}
//               </p>
    
//               <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-text2 mt-2">
//                 <span className="text-[#BDBDBD]">${product.price}</span>{" "}
//                 <span className="text-text2">${product.new_price}</span>
//               </h5>
    
//             </div>
//           ))}
//         </div>
      
//     </section>
//   );
// };

// export default BestSeller_Pd;

