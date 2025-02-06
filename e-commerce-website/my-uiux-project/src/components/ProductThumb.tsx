"use client";

import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { Product } from "../../sanity.types";
import AddToWishlist from "./AddToWishlist";

// Define the type for the block and child objects
interface BlockChild {
  _key: string;
  _type: string;
  text: string;
}

interface Block {
  _key: string;
  _type: string;
  children: BlockChild[];
}

const ProductThumb = ({ product }: { product: Product }) => {  
  const isOutOfStock = useMemo(() => {
    const stock = Number(product.stock ?? 0); // Convert to number, default to 0 if null or undefined
    return stock <= 0;
  }, [product.stock]);
  

  // Truncate the description if it's too long
  const truncatedDescription = useMemo(() => {
    const descriptionText = Array.isArray(product.description)
      ? product.description
          .map((block: Block) =>
            block._type === "block"
              ? block.children?.map((child: BlockChild) => child.text).join(" ")
              : " "
          )
          .join(" ") // Join all blocks into a single string
      : product.description || "No description available";

    return descriptionText.length > 60 ? `${descriptionText.substring(0, 60)}...` : descriptionText;
  }, [product.description]);

  return (
    <div className="w-full">
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hoverEffect ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-disabled={isOutOfStock} // Add a disabled state for accessibility
    >
      <div className="relative aspect-square w-full h-full overflow-hidden">
        {product.image && (
          <Image
            src={imageUrl(product.image).url()}
            alt={product.name || "Product image"}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}

       <div className="absolute top-2 right-2">
          <AddToWishlist product={product} />
        </div>

      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>

        <p className="text-sm text-gray-600 mt-2">
          {truncatedDescription}
        </p>

        <div className="mt-2 flex flex-col justify-between items-center">
          <div className="flex justify-between gap-6">
          <p className="text-lg font-bold text-gray-900">
            ${product.price?.toFixed(2) || "0.00"}
          </p>
          <p className="text-lg font-medium text-gray-600">
            Stock: {product.stock ?? "N/A"}
          </p>
          </div>
          <button className="mt-3 w-full bg-prim_blue hover:bg-prim_blue/80 text-white px-4 py-2 rounded">
        Buy Now
      </button>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default ProductThumb;
