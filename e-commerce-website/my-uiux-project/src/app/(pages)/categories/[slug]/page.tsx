import React from 'react';
import ProductsView from '@/components/ProductsView';
import { getAllCategories } from '@/sanity/lib/product/getAllCategories';
import { getProductsCategory } from '@/sanity/lib/product/getProductByCategory';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const formatTitle = (slug: string): string => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const { slug } = await params;

  try {
    const [products, categories] = await Promise.all([
      getProductsCategory(slug),
      getAllCategories(),
    ]);

    return (
      <div className="flex flex-col items-center w-full justify-top max-w-screen-2xl min-h-screen mx-auto bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {formatTitle(slug)} Collection
          </h1>
          <ProductsView products={products} categories={categories} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
            Error
          </h1>
          <p className="text-center">Failed to load the category page.</p>
        </div>
      </div>
    );
  }
};

export default CategoryPage;
