// 'use client';


// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Product } from '../../sanity.types';
// import Image from 'next/image';
// import { imageUrl } from '@/lib/imageUrl';


// type ProductDetailsProps = {
//   product: Product;
// };

// export default function ProductDetails({ product }: ProductDetailsProps) {
//   return (
//     <div className="flex flex-col justify-between">
//       {/* Image Section */}
//       <div className="relative">
//         {product.image && product.image.length > 0 ? (
//           <Swiper navigation slidesPerView={1} spaceBetween={10}>
//             {product.productImage.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <Image  src={imageUrl(img).url()}  alt={`Product Image ${index + 1}`} className="object-cover rounded" />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         ) : (
//           <div className="flex items-center justify-center bg-gray-200 text-gray-500 text-lg font-semibold h-96 rounded-lg">
//             No Image Available
//           </div>
//         )}
//       </div>

//       {/* Product Details */}
//       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//       <div className="text-xl font-bold mb-4">${product.price}</div>
//       <div className="text-xl font-bold mb-4">Available Stock: {product.stock}</div>
//       <div className="prose max-w-none mb-6">
//         {Array.isArray(product.description) ? (
//           <p>{product.description.join(', ')}</p>
//         ) : (
//           <p>{product.description}</p>
//         )}
//       </div>
//     </div>
//   );
// }


import AddToBasketButton from '@/components/AddToBasketButton';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';
import { Thumbs, Navigation } from 'swiper/modules';
import { getAllProductsBySlug } from '@/sanity/lib/product/getAllProductsBySlug';

type ProductDetailsProps = {
  product: {
    name: string;
    price: number;
    stock: number;
    images: string[];
    description: any;
  };
};

export default async function ProductDetails({params,}: {params:Promise<{slug: string;}>}) {

    const { slug } = await params;
    const product = await getAllProductsBySlug(slug);

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="relative">
        {product.images && product.images.length > 0 ? (
          <>
            <Swiper
              modules={[Navigation, Thumbs]}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              className="w-full"
            >
              {product.images.map((img: string, index: number) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`Product Image ${index + 1}`}
                    width={506}
                    height={450}
                    className="w-full object-cover rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              slidesPerView={4}
              spaceBetween={10}
              className="mt-4"
            >
              {product.images.map((img: string, index: number) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={75}
                    className="w-20 h-16 object-cover rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <div className="flex items-center justify-center bg-gray-200 text-gray-500 text-lg font-semibold h-96 rounded-lg">
            No Image Available
          </div>
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="text-xl font-bold mb-4">${product.price.toFixed(2)}</div>
          <div className="text-xl font-bold mb-4">
            Available Stock: {product.stock != null ? product.stock : 'N/A'}
          </div>
          <div className="prose max-w-none mb-6">
            {Array.isArray(product.description) ? (
              <PortableText value={product.description} />
            ) : (
              <p>{product.description || 'No description available.'}</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <AddToBasketButton product={product} disabled={isOutOfStock} />
        </div>
      </div>
    </div>
  );
}
