import Shop_Hero from "./components/Hero";
import EditorsSection from "./components/Editors";
import BestSeller_Pd from "./components/BestSellProducts";
import { ClassicProduct } from "./components/ClassicProduct";
import Universe from "./components/Univers";
import FeaturedPosts from "./components/Post";


export default function Home() {
  return (
   <>
   <main>
    <Shop_Hero />
    <EditorsSection />
    <BestSeller_Pd />
    <ClassicProduct />
    <Universe />
    <FeaturedPosts />
    </main>
   </>
  );
}
