import Image from 'next/image';
import React from 'react';

interface Product {
  id: string;
  url: string;
  title: string;
  description: string;
  price: number;
  new_price: number;
  showColors?: boolean; // Optional property
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
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

          {product.showColors && (
            <div className="flex gap-1 mt-2 justify-center">
              <span className="bg-prim_blue w-[16px] h-[16px] rounded-full"></span>
              <span className="bg-prim_green w-[16px] h-[16px] rounded-full"></span>
              <span className="bg-orange w-[16px] h-[16px] rounded-full"></span>
              <span className="bg-text2 w-[16px] h-[16px] rounded-full"></span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
