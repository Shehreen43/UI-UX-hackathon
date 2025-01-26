// 'use client'

// import Link from "next/link";
// import Image from "next/image";
// import BrandsLogo from "@/app/components/Brands";
// import React, { useState } from "react";
// import { GoChevronRight } from "react-icons/go";
// import { SlArrowRight } from "react-icons/sl";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { HiOutlineHeart } from "react-icons/hi";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { BsEyeFill } from "react-icons/bs";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/thumbs";



// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { Product } from "../../../../../sanity.types";

// const ProductDetails = ({ products }: { products?: any[] }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   // Example product data (replace with actual props or API data)
//   const exampleProduct = {
//     name: "Floating Phone",
//     description:
//       "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.",
//     price: 1139.33,
//     rating: 4.5,
//     ratingCount: 10,
//     availability: "In Stock",
//     colors: ["#0070f3", "#10b981", "#f97316", "#6b7280"],
//     images: [
//       "/productDetail/sofa-product-1.jpg",
//       "/productDetail/chair1.jpg",
//       "/productDetail/sofa-product-1.jpg",
//     ],
//   };

//   const currentProduct = products || exampleProduct; // Use provided product or fallback


//   return (
//     <>
//       {/* product detail section */}
//       <div className="w-full grid grid-cols-1  bg-light_Gray overflow-hidden max-w-screen-2xl pb-10 px-20 mx-auto mt-0 ">
//         {/* links */}
//         <div>
//           <ul className="justify-center sm:justify-start flex gap-1 py-6">
//             <li>
//               <Link href="/" className="font-bold sm:items-start">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <GoChevronRight className="pt-[5px] size-5 text-muted_text_col" />
//             </li>
//             <li>
//               <Link
//                 href="/Shop"
//                 className="text-muted_text_col font-bold sm:items-end active:text-text2"
//               >
//                 Shop
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Product Images */}
//         <div className="flex flex-col items-center">


//         <div className="flex flex-col items-center">
      
// <Swiper
//   // modules={[Navigation, Thumbs]}
//   navigation
//   thumbs={{ swiper: thumbsSwiper }}
//   className="w-full"
// >
//   {currentProduct.images.map((img: string, index: number) => (
//     <SwiperSlide key={index}>
//       <Image
//         src={img}
//         alt={`Product Image ${index + 1}`}
//         width={506}
//         height={450}
//         className="w-full object-cover rounded"
//       />
//     </SwiperSlide>
//   ))}
// </Swiper>;


//           <Swiper
//             // modules={[Thumbs]}
//             onSwiper={setThumbsSwiper}
//             slidesPerView={4}
//             spaceBetween={10}
//             className="mt-4"
//           >
//             {currentProduct.images.map((img: string, index: number) => (
//               <SwiperSlide key={index}>
//                 <Image
//                   src={img}
//                   alt={`Thumbnail ${index + 1}`}
//                   width={100}
//                   height={75}
//                   className="w-20 h-16 object-cover rounded"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Product Info */}
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">
//             {currentProduct.name}
//           </h1>
//           <div className="flex items-center gap-1 text-yellow-500 my-2">
//             {Array.from({ length: Math.floor(currentProduct.rating) }).map(
//               (_, i) => (
//                 <AiFillStar key={i} />
//               )
//             )}
//             {currentProduct.rating % 1 !== 0 && <AiOutlineStar />}
//             <span className="text-gray-600 ml-2">
//               ({currentProduct.ratingCount} Reviews)
//             </span>
//           </div>
//           <p className="text-xl font-bold text-blue-600 my-4">
//             ${currentProduct.price.toFixed(2)}
//           </p>
//           <p className="text-sm text-gray-700 my-2">
//             Availability:{" "}
//             <span className="text-green-600 font-medium">
//               {currentProduct.availability}
//             </span>
//           </p>
//           <p className="text-gray-600 my-4">{currentProduct.description}</p>

//           {/* Color Options */}
//           <div className="flex gap-3 my-4">
//             {currentProduct.colors.map((color: string, index: number) => (
//               <span
//                 key={index}
//                 style={{ backgroundColor: color }}
//                 className="w-8 h-8 rounded-full border border-gray-300"
//               ></span>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 my-6">
//             <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
//               <Link href="/">Add to Cart</Link>
//             </button>
//             <button className="bg-gray-200 p-2 rounded-full">
//               <HiOutlineHeart className="text-gray-600" />
//             </button>
//             <button className="bg-gray-200 p-2 rounded-full">
//               <MdOutlineShoppingCart className="text-gray-600" />
//             </button>
//             <button className="bg-gray-200 p-2 rounded-full">
//               <BsEyeFill className="text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* product description section */}
//       <div className="w-full bg-white overflow-hidden max-w-screen-2xl font-semibold px-20 pb-10 mx-auto mt-0">

//         {/* navigation links */}
//         <nav className="py-6 md:p-6">
//           <ul className="flex items-center justify-center font-semibold leading-3 md:leading-6 tracking-[0.2px] gap-2 pb-5 md:gap-6">
//           <li>
//               <Link
//                 href="/Shop/ShopDetail"
//                 className="text-text font-montserrat text-sm  "
//               >
//                Description
//               </Link>
//             </li>
//           <li>
//               <Link
//                 href="/Shop/ShopDetail"
//                 className="text-text font-montserrat text-sm leading-6 tracking-[0.2px]"
//               >
//               Additional Information
//               </Link>
//             </li>
//           <li>
//               <Link
//                 href="/Shop/ShopDetail"
//                 className="text-text font-montserrat text-sm leading-6 tracking-[0.2px]"
//               >
//              Reviews<span className="text-prim_green"> (0) </span>
//               </Link>
//             </li>
//           </ul>
//           <hr  className="w-full"/>
//         </nav>
       

//        {/* other info about product  */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"> 
//         {/* img box */}
//         <div className="mb-5">
//         <Image
//                 src={"/productDetail/fram-wall.png"}
//                 alt="Product Chair"
//                 width={325}
//                 height={382}
//                 className="w-full object-cover"
//               />
//         </div>
         
//         <div className="lg:pl-5">
//         <h3 className="font-montserrat text-xl text-text2 font-bold leading-[32px] tracking-[0.1px] py-2">the quick fox jumps over </h3>
//         <p className="font-montserrat text-sm font-normal leading-20rem] tracking-[0.2px] py-2 lg:py-4 text-text">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met..</p>
//         <p className="font-montserrat text-sm font-normal leading-[20px] tracking-[0.2px] py-2 lg:py-4 text-text">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met..</p>
//         <p className="font-montserrat text-sm font-normal leading-[20px] tracking-[0.2px] py-2 lg:py-4 text-text">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met..</p>
//         <p className="font-montserrat text-sm font-normal leading-[20px] tracking-[0.2px] py-2 lg:py-4 text-text">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met..</p>
//         </div>
         
//          <div className="md:flex gap-4 lg:flex-col xl:pl-5">
//           {/* 1 */}
//         <div className="flex flex-col justify-start items-start gap-y-2">
//         <h3 className="font-montserrat text-xl text-text2 font-bold leading-[32px] tracking-[0.1px] p-2">the quick fox jumps over </h3>
//         <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
//         <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
//         <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
//         <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
//         </div>
//          {/* 2 */}
//         <div className="flex flex-col justify-start items-start gap-y-2">
//         <h3 className="font-montserrat text-xl text-text2 font-bold leading-[32px] tracking-[0.1px] p-2">the quick fox jumps over </h3>
//         <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
//         <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
//         <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
//         <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
//         </div>
//         </div>
//       </div>
//       </div>

//         {/* product cards  */}
//         <div className="w-full grid grid-cols-1  bg-light_Gray overflow-hidden max-w-screen-2xl pb-10 px-20 mx-auto mt-0 ">
//           <div>
//           <h3 className="font-montserrat text-xl pt-10 pb-5 font-bold leading-[32px] tracking-[0.1px]  text-text2">BESTSELLER PRODUCTS</h3>
//           <hr />
//            {/* Card Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//                   {products.map((product) => (
//                     <div key={product.id} className="flex flex-col bg-white">
//                       <div className="min-w-[239px] max-h-[280px] w-full">
//                         <Image
//                           src={product.url}
//                           alt={product.title}
//                           width={239}
//                           height={280}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
          
//                       <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] pl-5 pt-5 pb-1 text-text2 mt-2">
//                         {product.title}
//                       </h5>
          
//                       <p className="font-montserrat text-[14px] font-bold leading-[24px] pl-5 tracking-[0.2px] text-text">
//                         {product.description}
//                       </p>
          
//                       <h5 className="font-montserrat pl-5 text-[16px] font-bold leading-[24px] tracking-[0.1px] pb-10 text-text2 mt-2">
//                         <span className="text-[#BDBDBD]">${product.price}</span>{" "}
//                         <span className="text-prim_green">${product.new_price}</span>
//                       </h5>
          
//                 {/* Color Options */}
//           <div className="flex gap-3 my-4">
//             {currentProduct.colors.map((color: string, index: number) => (
//               <span
//                 key={index}
//                 style={{ backgroundColor: color }}
//                 className="w-8 h-8 rounded-full border border-gray-300"
//               ></span>
//             ))}
//           </div>
//                     </div>
//                   ))}
//                 </div>
//           </div>
//          </div>
//         {/* brands logo */}
//       <BrandsLogo />
//       </div>
//       </div>
//     </>
//   )
// };
// export default ProductDetails;