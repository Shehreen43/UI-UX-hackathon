"use client";

import React from "react";
import { useWishlistStore } from "@/store/wishlistStore";
import Image from "next/image";

// Define the Wishlist Product type
type WishlistProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const Wishlist = () => {
  const { wishlist, clearWishlist } = useWishlistStore();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-6">
          {wishlist.map((product: WishlistProduct) => (
            <div
              key={product.id}
              className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={64}
                height={64}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
     {wishlist.length > 0 ?  ( <button
        onClick={clearWishlist}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition duration-300"
      >
        Clear Wishlist
      </button>
      ):(
        <></>
      )}
    </div>
  );
};

export default Wishlist;
