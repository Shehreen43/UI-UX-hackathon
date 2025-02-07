
import ProductGrid from "./ProductGrid";
import { CategorySelectorComponent } from "./category-selector";

import { Category, Product } from "../../sanity.types";

interface ProductsViewProps {
    products: Product[]; 
    categories: Category[];
};

const ProductsView = ({products, categories}:ProductsViewProps) =>{
    return (
        <div className="flex flex-col max-w-7xl mx-auto">
            {/* categories */}
            <div className="w-full sm:w-[200px]">
                <CategorySelectorComponent categories={categories} />
            </div>

            {/* products */}
            <div className="flex-1 w-full">
                <div>
                    <ProductGrid products={products} />

                    <hr  className="w-1/2 sm:w-3/4 items-center justify-center mt-10 flex"/>
                </div>
            </div>
        </div>
    )
};

export default ProductsView; 