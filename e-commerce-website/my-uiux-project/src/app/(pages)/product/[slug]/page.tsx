

import CommentSection from "@/app/components/CommentSection";
import AddToBasketButton from "@/components/AddToBasketButton";
import { imageUrl } from "@/lib/imageUrl";
import { getAllProductsBySlug, getCommentsForProduct } from "@/sanity/lib/product/getAllProductsBySlug";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
import { HiOutlineHeart } from "react-icons/hi";

async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getAllProductsBySlug(slug);
  const comments = await getCommentsForProduct(product._id);

  if (!product) {
    return notFound();
  }

  const isOutOfStock = product.stock != null && product.stock <= 0;
  return (
    <div className="w-full grid grid-cols-1  bg-light_Gray overflow-hidden max-w-screen-2xl pb-10 px-20 mx-auto mt-0 ">
      {/* links */}
      <div>
        <ul className="justify-center sm:justify-start flex gap-1 py-6">
          <li>
            <Link href="/" className="font-bold sm:items-start">
              Home
            </Link>
          </li>
          <li>
            <GoChevronRight className="pt-[5px] size-5 text-muted_text_col" />
          </li>
          <li>
            <Link
              href="/Shop"
              className="text-muted_text_col font-bold sm:items-end active:text-text2"
            >
              Shop
            </Link>
          </li>
        </ul>
      </div>
          
          {/* product details */}
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}
          >
            {product.image && (
              <Image
                src={imageUrl(product.image).url()}
                alt={product.name ?? "Product Image"}
                fill
                className="object-contain transition-transform duration-300 hoverEffect"
              />
            )}
            {isOutOfStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 ">
                <span className="text-white font-bold text-lg">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

            {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {product.name}
              </h1>
              <div className="flex items-center gap-1 text-yellow-500 my-2">
                {Array.from({ length: Math.floor(product.rating) }).map(
                  (_, i) => (
                    <AiFillStar key={i} />
                  )
                )}
                {product.rating % 1 !== 0 && <AiOutlineStar />}
                <span className="text-gray-600 ml-2">
                  ({product.ratingCount} Reviews)
                </span>
              </div>
              <h3 className="font-montserrat text-xl font-bold leading-[32px] tracking-[0.1px] text-text2 py-1">
                ${product.price.toFixed(2)}
              </h3>
              <div className="flex text-sm font-bold text-text py-1 gap-2">
                <span>Availability :</span>{" "}
                <span className="text-prim_blue">
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}{" "}
                </span>
              </div>
              <div className="prose max-w-none mb-6">
                {Array.isArray(product.description) ? (
                  <PortableText value={product.description} />
                ) : (
                  <p>{product.description || "No description available."}</p>
                )}
              </div>
              {/* Color Options */}
              <div className="flex gap-3 my-4">
                {/* // Ensure product.colors is an array before using .map() */}
                {Array.isArray(product.colors) && product.colors.length > 0 ? (
                  product.colors.map((color: string, index: number) => (
                    <span
                      key={index}
                      style={{ backgroundColor: color }}
                      className="w-8 h-8 rounded-full border border-gray-300"
                    ></span>
                  ))
                ) : (
                  <p>No more colors options available</p> // Fallback if no colors
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex mt-10 gap-2">
                <button className="bg-prim_blue text-[14px] font-montserrat font-bold text-white p-2 rounded-[5px] ">
                  <Link href={"/"}>Select Options</Link>
                </button>
                <div className="bg-white border rounded-full size-10 items-center justify-center flex">
                  <HiOutlineHeart className="size-5" />
                </div>
                <div className="bg-white border rounded-full items-center justify-center flex">
                  <AddToBasketButton
                    product={product}
                    disabled={isOutOfStock}
                  />
                </div>

              
              </div>
            </div>
          </div>
        </div>
        {/* Comments Section */}
      <div className="mt-10">
        <CommentSection productId={product._id} comments={comments} />
      </div>
      </div>

      {/*  */}

    </div>
  );
}

export default ProductPage;
