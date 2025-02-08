import AddToBasketButton from '@/components/AddToBasketButton';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { useState, useEffect } from 'react';
import { getAllProductsBySlug } from '@/sanity/lib/product/getAllProductsBySlug';
import { Product } from '../../sanity.types';
import { imageUrl } from '@/lib/imageUrl';

export default function ProductDetails({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData: Product = await getAllProductsBySlug(params.slug);
      setProduct(productData);
    };

    fetchProduct();
  }, [params]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}>
             {product.image && (
                <Image 
                src={imageUrl(product.image).url()}
                alt={product.name ?? "Product Image"}
                fill
                className='object-contain transition-transform duration-300 hoverEffect'
                />
             )}
             {isOutOfStock && (
                <div className='absolute inset-0 flex items-center justify-center bg-black/50 '>
                  <span className='text-white font-bold text-lg'>Out of Stock</span>
                </div>
             )}
          </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="text-xl font-bold mb-4">${product.price?.toFixed(2)}</div>
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
