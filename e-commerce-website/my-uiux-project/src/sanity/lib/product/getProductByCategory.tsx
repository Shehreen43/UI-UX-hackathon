import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsCategory = async (categorySlug: string) => {
    // Update the query to reference the category's slug, not product's slug
    const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`
        *[_type == "product" && category->slug.current == $categorySlug] | order(name asc)
    `);

    try {
        // Use sanityFetch to send the query with the categorySlug as a parameter
        const products = await sanityFetch({
            query: PRODUCT_BY_CATEGORY_QUERY,
            params: {
                categorySlug,
            }
        });

        // Return the product data or null if no products are found
        return products.data || null;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
};


// import { defineQuery } from "next-sanity"
// import { sanityFetch } from "../live";

// export const getProductsCategory = async (categorySlug: string) => {
//     const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`*[_type == "product" && slug.current == $categorySlug] | order(name asc)`);

//     try {
//         //Use sanityFetch to send the query with the slug as a parameter
//         const products = await sanityFetch({
//             query: PRODUCT_BY_CATEGORY_QUERY,
//             params: {
//                 categorySlug,
//             }
//         });

//         //Return te product data or null slug as a parameter
//        return products.data || null;
//     } catch (error) {
//         console.error("Error fetching product by category:", error);
        
//         return [];
//     }
// }