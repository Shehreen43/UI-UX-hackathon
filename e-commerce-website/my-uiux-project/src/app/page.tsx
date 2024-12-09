import Shop_Hero from "./components/Hero";
import EditorsSection from "./components/Editors";
import BestSeller_Pd from "./components/BestSellProducts";
import { ClassicProduct } from "./components/ClassicProduct";


export default function Home() {
  return (
   <>
    <Shop_Hero />
    <EditorsSection />
    <BestSeller_Pd />
    <ClassicProduct />
   </>
  );
}
