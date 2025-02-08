import Shop_Hero from "../components/Hero";
import EditorsSection from "../components/Editors";
import { ClassicProduct } from "../components/ClassicProduct";
import Universe from "../components/Univers";
import FeaturedPosts from "../components/Post";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/product/getAllCategories";
import { getAllProducts } from "@/sanity/lib/product/getAllProducts";


export default async function Home() {

  const products = await getAllProducts()
  const categories = await getAllCategories()

  return (
   <main>
    <Shop_Hero />
    <EditorsSection />
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
    <ProductsView products={products} categories={categories} />
    </div>
    <ClassicProduct />
    <Universe />
    <FeaturedPosts />
    </main>
  );
}
