'use client';
import { AnimatePresence, motion } from "framer-motion";
import ProductThumb from "./ProductThumb";
import { Product } from "../../sanity.types";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 pt-10">
      <div>
        <h4 className="font-montserrat text-text text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center">
          Featured Products
        </h4>
        <h3 className="font-montserrat text-[24px] text-text2 font-bold leading-[32px] tracking-[0.1px] text-center">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-montserrat text-[14px] font-normal text-text leading-[20px] tracking-[0.2px] text-center">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
        {products?.map((product) => (
          <AnimatePresence key={product._id}>
            <motion.div
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center w-full"
            >
              <ProductThumb product={product} />
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;


// 'use client';
// import {AnimatePresence, motion} from "framer-motion"

// import ProductThumb from "./ProductThumb";
// import { Product } from "../../sanity.types";


// const ProductGrid = ({products}: {products:Product[]}) => {
//   return (
//     <section className="max-w-screen-2xl mx-auto px-4 pt-10">
//     <div>
//         <h4 className="font-montserrat text-text text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center">
//           Featured Products
//         </h4>
//         <h3 className="font-montserrat text-[24px] text-text2 font-bold leading-[32px] tracking-[0.1px] text-center">
//           BESTSELLER PRODUCTS
//         </h3>
//         <p className="font-montserrat text-[14px] font-normal text-text leading-[20px] tracking-[0.2px] text-center">
//           Problems trying to resolve the conflict between
//         </p>
//       </div>
//     <div className="grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
//        {products?.map((product) => {
//         return(
//             <AnimatePresence key={product._id}>
//               <motion.div 
//               layout
//               initial={{opacity: 0.2}}
//               animate={{opacity: 1}}
//               exit={{opacity: 0}}
//               className="flex justify-center w-full"
//               >
//               <ProductThumb key={product._id} product={product} />
//               </motion.div>
//             </AnimatePresence> 
//         )
//        })}
//     </div>
//     </section>
//   )
// }

// export default ProductGrid;