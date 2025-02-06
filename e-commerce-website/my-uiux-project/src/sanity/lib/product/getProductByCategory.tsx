import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsCategory = async (categorySlug:string) => {
  // Define the query to fetch products by category slug
  const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`
    *[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc) {
      // Include the fields you need from the product
      _id,
      name,
      description,
      price,
      image,
      slug,
      stock,
      // Add other fields as necessary
    }
  `);

  try {
    // Fetch products using the defined query and categorySlug parameter
    const products = await sanityFetch({
      query: PRODUCT_BY_CATEGORY_QUERY,
      params: {
        categorySlug, // Ensure this is provided
      },
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